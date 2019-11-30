const formidable = require('formidable');
const fs = require('fs');
const format = require('date-format'); 

const db = require('../../database');

require('dotenv').config();


exports.createNews = (req, res) => {
    let form = new formidable.IncomingForm();

    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }

        const { title, text } = fields;
        let image = files.image;
        let image64 = '';

        if(!title || !text) {
            return res.status(400).json({
                error: 'All fields are required'
            })
        }

        if(image) {
            if(image.size > process.env.MAX_IMAGE_SIZE) {
                return res.status(400).json({
                    error: 'Image is to big'
                })
            }

            if(!(image.type == "image/png" || image.type == "image/jpg" || image.type == "image/jpeg")) {
                return res.status(400).json({
                    error: 'Wrong type of file'
                })
            }

            image64 = fs.readFileSync(image.path, 'base64');
        } else {
            return res.status(400).json({
                error: 'Image is required'
            })
        }
        let sql = `INSERT INTO images(image) VALUES (?)`;
        db.connect.query(sql, [image64], (err, values) => {
            if(err) {
                return res.status(400).json({
                    error: err
                })
            }

            sql = `insert into news (title, image, text, author) values (?, ?, ?, ?)`;
            db.connect.query(sql, [title, values.insertId, text, req.user.id], (err, val) => {
                if(err) {
                    return res.status(400).json({
                        error: err
                    })
                }
                res.status(200).json(val);
            });
        });
    })
}

exports.newsById = (req, res, next, id) => {
    let sql = `SELECT A.id, A.title, C.image, A.text, A.author, B.name as 'authorName', A.createdAt, A.updatedAt, COUNT(D.id) as 'likes', A.views
    FROM news as A 
    LEFT JOIN users as B ON A.author = B.id 
    LEFT JOIN images as C ON A.image = C.id 
    LEFT JOIN news_likes as D ON A.id = D.news
    WHERE A.id = ?`;
    db.connect.query(sql, [id], (err, values) => {
        if(err || !values) {
            return res.status(400).json({
                error: err
            })
        }
        req.news = values[0];
        next();
    });
}

exports.readOneNews = (req, res) => {
    res.status(200).json(req.news);

    let sql = `UPDATE news SET views = views + 1 WHERE id = ${req.news.id}`;
    db.connect.query(sql);
}

exports.listNews = (req, res) => {
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : 'createdAt';
    let limit = req.body.limit ? req.body.limit : 6;
    
    let sql = `SELECT A.id, A.title, C.image, B.name as 'authorName', A.createdAt, COUNT(D.id) as 'likes', A.views
    FROM news as A 
    LEFT JOIN users as B ON A.author = B.id 
    LEFT JOIN images as C ON A.image = C.id 
    LEFT JOIN news_likes as D ON A.id = D.news
    GROUP BY A.id
    ORDER BY A.${sortBy} ${order}
    LIMIT 0, ${limit}`;
    db.connect.query(sql, (err, values) => {
        if(err || !values) {
            return res.status(400).json({
                error: err
            })
        }
        
        return res.status(200).json(values);
    });
}

exports.listLowInfosNews = (req, res) => {
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : 'createdAt';
    let limit = req.body.limit ? req.body.limit : 4;
    
    let sql = `SELECT A.id, A.title, A.author, B.name as 'authorName', A.createdAt
    FROM news as A 
    LEFT JOIN users as B ON A.author = B.id 
    LEFT JOIN news_likes as C ON A.id = C.news
    GROUP BY A.id
    ORDER BY ${sortBy} ${order}
    LIMIT 0, ${limit}`;
    db.connect.query(sql, (err, values) => {
        if(err || !values) {
            return res.status(400).json({
                error: err
            })
        }
        
        res.status(200).json(values);
    });
}

exports.getImage = (req, res) => {
    let sql = `SELECT image FROM news WHERE id = ?`;
    db.connect.query(sql, [req.news.id], (err, values) => {
        if(err || !values) {
            return res.status(400).json({
                error: err
            })
        }
        sql = `SELECT image FROM images WHERE id = ?`;
        db.connect.query(sql, [values[0].image], (err, val) => {
            if(err || !values) {
                return res.status(400).json({
                    error: err
                })
            }
            return res.status(200).json(val[0])
        })
    })
}

exports.searchNews = (req, res) => {
    let text = req.body.text ? req.body.text : '';
    
    let sql = `SELECT A.id, A.title, A.author, B.name as 'authorName', A.createdAt
    FROM news as A 
    LEFT JOIN users as B ON A.author = B.id 
    WHERE A.title LIKE '%${text}%'
    ORDER BY A.createdAt desc
    LIMIT 0, 4`;
    db.connect.query(sql, (err, values) => {
        if(err || !values) {
            return res.status(400).json({
                error: err
            })
        }
        
        return res.status(200).json(values);
    });
}

exports.likeNews = (req, res) => {
    let news = req.body.news;
    let user = req.auth.id;

    let sql = `INSERT INTO news_likes (user, news) VALUES (?, ?)`;
    db.connect.query(sql, [user, news], (err, values) => {
        if(err || !values) {
            if(err.code === "ER_DUP_ENTRY") {
                let sql = `DELETE FROM news_likes WHERE news = ? and user = ?`
                db.connect.query(sql, [news, user], (err, values) => {
                    return res.status(200).json({ message: 'desliked' });
                })
            } else {
                return res.status(400).json({ error: err });
            }
        } else {
            return res.status(200).json({ message: 'liked' });
        }
    })
}

exports.checkLike = (req, res) => {
    let news = req.body.news;
    let user = req.user.id;

    let sql = `SELECT id FROM news_likes WHERE user = ? and news = ?`;
    db.connect.query(sql, [user, news], (err, values) => {
        if(err || !values[0]) {
            return res.status(200).json({ like: false });
        } else {
            return res.status(200).json({ like: true });
        }
    });
}