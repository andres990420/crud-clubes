const multer = require('multer')

const MIME_TYPES = {
    'image/jpg' : 'jpg',
    'image/jpeg' : 'jpg',
    'image/png' : 'png',
};

const storage = multer.diskStorage({
    destination: './uploads/escudos',
    filename: (req, file, callback)=>{
        const name = req.body.tla;
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + '-escudo' + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('escudo')