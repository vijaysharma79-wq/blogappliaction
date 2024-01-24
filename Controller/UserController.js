const { hassPass, comparPassword } = require("../helper/bcrypt")
const { Loginmodal } = require("../model/Usermodel")

const jwt=require("jsonwebtoken")
const register = async (req, res) => {
    // console.log(email,password)
    try {
        const { email, password } = req.body
        let user = await Loginmodal.findOne({ email })
        if (user) {
            res.status(201).send({ succes: false, message: "already exsist" })
        } else {
            let hasspassword = await hassPass(password)

            let userDetail = await Loginmodal.create({ ...req.body, password: hasspassword })
            res.status(201).send({ succes: true, message: "register succesefully", user: userDetail })
        }
    } catch (error) {
        res.status(500).send({ succes: false, message: error.message })
    }

}

const Login = async(req, res) => {
    try {
        const { email, password } = req.body
        let user = await Loginmodal.findOne({ email })
        if (!user) {
            res.status(401).send({ succes: false, message: "email not exsist" })

        }
        else {

            let matchpassword=  await comparPassword(password,user.password)
            console.log(matchpassword)
            if (matchpassword) {
                var token = jwt.sign({ user: user }, "password")
                console.log(token)

                await res.setHeader("token", token)
                res.status(200).send({ succes: true, message: "loginsuccesfully" })

            } else {
                res.status(401).send({ succes: false, message: "wrong password" })

            }
        }

    } catch (error) {

        res.status(500).send({ succes: false, message: error.message })

    }

}

module.exports = { register, Login }