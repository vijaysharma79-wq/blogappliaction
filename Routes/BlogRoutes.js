const express =require('express')
const { CreateBlog, updateBlog, deleteBlog } = require('../Controller/BlogController')
const { upload } = require('../helper/multer')



const blogRoutes=express.Router()


blogRoutes.post('/createBlog',upload.single("blogpic"),CreateBlog)
blogRoutes.put('/updateBlog',updateBlog)
blogRoutes.delete('/deleteBlog',deleteBlog)





module.exports={blogRoutes}