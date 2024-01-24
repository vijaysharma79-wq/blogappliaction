const bcrypt = require('bcrypt');

const hassPass = async (simplepassword) => {

    const saltRounds = 10;
    let hasspassword = await bcrypt.hash(simplepassword, saltRounds)
    return hasspassword
}

const comparPassword = async (simplepassword, passwordnew) => {

    let compare = await bcrypt.compare(simplepassword, passwordnew)
    return compare
}
// let hashedPassword = bcrypt.hash(password,10)

module.exports = {
    hassPass, comparPassword
}