const { validationResult } = require('express-validator');
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
        let image = '';

        if(!title || !text) {
            return res.status(400).json({
                error: 'All fields are required'
            })
        }

        if(files.image) {
            if(files.image.size > process.env.MAX_IMAGE_SIZE) {
                return res.status(400).json({
                    error: 'Image is to big'
                })
            }

            image.data = fs.readFileSync(files.image.path);
            image.type = files.image.type;
        } else {
            return res.status(400).json({
                error: 'Image is required'
            })
        }

        let sql = `insert into news (title, image, imageType, text, author) values (?, ?, ?, ?, ?)`;
        db.connect.query(sql, [title, image.data, image.type, text, req.user.id], (err, values) => {
            if(err) {
                return res.status(400).json({
                    error: err
                })
            }
            res.status(200).json(values);
        });
    })
}