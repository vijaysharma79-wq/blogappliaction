const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        let datetimestamp = Date.now()+Math.random()
        cb(null, datetimestamp+file.fieldname);
    },
});
const upload = multer({storage: storage,  limits: { fileSize: 10 *1024 *100 }});


module.exports={upload}
