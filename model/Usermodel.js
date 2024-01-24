const { default: mongoose } = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    mobile: { type: String},
    city: { type: String},


})

const Loginmodal = new mongoose.model("Companyuser", UserSchema)



module.exports = { Loginmodal }
