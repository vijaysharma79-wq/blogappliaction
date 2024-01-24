const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/vijay')
    .then(() => console.log('Connected!')).catch(() => console.log("not coonect"));