const Photo = require('../models/Photo')

const getAllPhotos = async (req,res)=>{
    const photos = await Photo.find().lean()
    if(!photos)
       return res.status(400).json({message:'not found photo'})

    res.json(photos)
}

const getPhotoByTitle=async (req,res)=>{
    const {title}= req.body
    if(!title)
        return res.status(400).json({ message: "not found photo with this title"})
    const photo = await Photo.find({title:title}).lean()
    res.json(photo)
}
const createPhoto = async (req,res) =>{
    const {title,imageUrl} = req.body
    if(!imageUrl)
        return res.status(400).json({ message: 'not send photo'})
    const newPhoto = await Photo.create({title,imageUrl})
    res.json(newPhoto)
}
const updatePhoto = async (req,res) => {
    const {id , title, imageUrl} = req.body
    const photo = await Photo.findById(id).exec()
    if(!photo)
        return res.status(400).message('not found photo to update')
    photo.title = title
    photo.imageUrl = imageUrl
    const updatephoto = await photo.save()
    res.json(updatephoto)
}

const deletePhoto = async (req, res) => {
    const { id } = req.body
    const photo = await Photo.findById(id).exec()
    if (!photo) {
    return res.status(400).json({ message: 'Photo not found' })
    }
    const result = await photo.deleteOne()
    const reply=`Photo '${photo.title}' ID ${id} deleted`
    res.json(reply)
}

module.exports = {
    getAllPhotos ,
    getPhotoByTitle,
    createPhoto,
    updatePhoto,
    deletePhoto
}