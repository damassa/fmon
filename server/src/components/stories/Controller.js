const formidable = require('formidable');
const db = require('../../database');

exports.createStorie = (req, res) => {
    let form = new formidable.IncomingForm();

    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }

        const { title, category } = fields;
        let image = files.image;
        let image64 = '';

        if(!title || !category) {
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

            sql = `INSERT INTO stories (title, category, author, image) VALUES (?, ?, ?, ?)`;
            db.connect.query(sql, [title, category, req.user.id, values.insertId], (err, val) => {
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

exports.listStories = (req, res) => {
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : 'createdAt';
    let limit = req.body.limit ? req.body.limit : 4;

    let sql = `SELECT A.id, A.title, B.name as 'authorName', A.image, A.createdAt, A.views
    FROM stories as A 
    LEFT JOIN users as B ON A.author = B.id 
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

exports.storieById = (req, res, next, id) => {
    next();
}