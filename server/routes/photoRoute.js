const express= require('express')
const router = express.Router()
const photoController = require('../controllers/photoController')

router.get('/', photoController.getAllPhotos)
router.get('/byTitle', photoController.getPhotoByTitle)
router.post('/', photoController.createPhoto)
router.put('/', photoController.updatePhoto)
router.delete('/',photoController.deletePhoto)

module.exports = router