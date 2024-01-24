const { blogModal } = require("../model/Blogmodel")



const CreateBlog = async (req, res) => {
  const { id, title, description, likes, blogpic, userId } = req.body
  console.log(req.body)
  try {
    let blog = await blogModal.create({
      ...req.body,
      id: id,
      title: title,
      description: description,
      likes: likes,
      blogpic: "localhost:8080/public/uploads/" +req.file.filename,
      userId: userId
    })
    res.status(200).send({ succes: true, message: "blog added", data: blog })


  } catch (error) {
    res.status(500).send({ succes: true, message: error.message })
  }
}
const updateBlog=async(req,res)=>{
  const { id, title, description, likes, blogpic, userId } = req.body
  try {
    let blog = await blogModal.updateOne({id:id},{$set:{description:description}})
 
    res.status(200).send({ succes: true, message: "blog updaed", data: blog })


  } catch (error) {
    res.status(500).send({ succes: true, message: error.message })
  }
  
}
const deleteBlog=async(req,res)=>{
  const { id} = req.body
  try {
    let blog = await blogModal.deleteOne({id:id})
 
    res.status(200).send({ succes: true, message: "blog deleted", data: blog })


  } catch (error) {
    res.status(500).send({ succes: true, message: error.message })
  }
  
}
module.exports = { CreateBlog ,updateBlog,deleteBlog}