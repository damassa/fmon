const formidable = require('formidable');
const fs = require('fs');

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
        let sql = `INSERT INTO images(image, name) VALUES (?, ?)`;
        db.connect.query(sql, [image64, image.name], (err, values) => {
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