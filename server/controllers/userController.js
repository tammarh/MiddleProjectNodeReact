const User= require("../models/User")

const getAllUsers = async (req,res) =>{
    const users = await User.find().lean().sort({id:1})
    if(!users)
        return res.status(400).json({message:'not users found'})
    res.json(users)
} 

const getUserById = async (req,res)=>{
    const {id}=req.body
    const userFound = await User.findById(id)
    if(!userFound)
        return res.status(404).message("not found user with Id:"+{id})

    res.json(userFound)
}

const createUser = async (req,res)=>{
    const {name,username,email,address,phone}= req.body
    if(!name || ! username)
        return res.status(400).send("not add ditails to create")
    const uniqusername = await User.findOne({username})
    if(uniqusername)
        return res.status(400).send("need unique username")
    const user = {name,username, email,address, phone }
    const newuser =await User.create(user)
    res.json(newuser)
}

const updateUser = async (req, res) => {
    const { name , username ,email , address ,phone} = req.body
    if(!username)
        return res.status(400).json({message:'add username'})
    const user = await User.findOne({username}).exec()
    if (!user) {
    return res.status(400).json({ message: 'user not found' })
    }
    if(name)
        user.name = name
    if(email)
         user.email = email
    if(address)
        user.address = address
    if(phone)
        user.phone = phone
    const updatedUser = await user.save()
    res.json(updatedUser)
}



const deleteUser = async (req, res) => {
    const { id } = req.params
    console.log(id);
    if (!id)
        return res.status(400).json("I must username")
    const user = await User.findById(id).exec()
    if (!user) {
    return res.status(400).json({ message: 'User not found' })
    }
    const result = await User.deleteOne(user)
    const reply=`User  ID ${id} deleted`
    res.json(reply)
}
module.exports = { getAllUsers , getUserById , createUser , updateUser ,deleteUser }

