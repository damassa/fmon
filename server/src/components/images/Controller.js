const db = require('../../database');

exports.imageById = (req, res, next, id) => {
    let sql = `SELECT image FROM images WHERE id =  ?`;
    db.connect.query(sql, [id], (err, values) => {
        if(err || !values) {
            return res.status(400).json({
                error: err
            })
        }
        req.image = values[0];
        next();
    });
}

exports.showImage = (req, res) => {
    return res.status(200).json(req.image);
}