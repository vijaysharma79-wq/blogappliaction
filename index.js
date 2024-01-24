const express = require('express')
const cors = require('cors')
const { UserRoutes } = require('./Routes/UserRoutes')
const { blogRoutes } = require('./Routes/BlogRoutes')
require('./Database/Db')
const app = express()

app.use(express.json())
app.use(express.static("public"))

app.use(cors())
app.use('/user', UserRoutes)
app.use('/blog', blogRoutes)




app.listen(8080, () => {
    console.log(`server is running 8080`)
})