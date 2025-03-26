const Post = require('../models/Post')

const allPosts = async (req,res)=>{
    const posts = await Post.find().lean().sort({id:1})
    if(!posts)
        return res.status(400).json({messege:'not found posts'})
    res.json(posts)
}

const getPotsbytitle=async (req,res)=>{
    const {title}= req.body
    if(!title)
        return res.status(400).json({message:"not found post with this title"})
    const post = await Post.find({title:title}).lean()
    res.json(post)
}

const createPost = async (req,res) =>{
    const {title , body} = req.body
    if(!title)
        return res.status(400).json({ message:  'not found post to create'})
    const newPost = await Post.create({title,body})
    if(newPost)
        return res.status(201).json({ message: 'new Post created'})
    else
        return res.status(400).json({ message: 'Invalid post'})
}

const updatePost = async (req,res) => {
    const {id , title, body} = req.body
    if(!id)
        return res.status(400).json({ message: 'not found id to update' })
    const post = await Post.findById(id).exec()
    if(!post)
        return res.status(400).json({ message: 'not found post to update' })
    if(title)
        post.title = title
    if(body)
        post.body = body
    const updatepost = await post.save()
    res.json(updatepost)
}

const deletePost = async (req, res) => {
    const { id } = req.params
    if(!id)
        return res.status(400).json({ message: 'id not found' })
    const post = await Post.findById(id).exec()
    if (!post) {
    return res.status(400).json({ message: 'Post not found' })
    }
    const result = await post.deleteOne()
    const reply=`Post '${post.title}' ID ${id} deleted`
    res.json(reply)
}
module.exports = {allPosts , createPost ,getPotsbytitle , updatePost ,deletePost}

