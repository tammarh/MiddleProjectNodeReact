const express= require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.get('/' , postController.allPosts)
router.get('/byTitle' , postController.getPotsbytitle)
router.post('/', postController.createPost)
router.put('/', postController.updatePost)
router.delete('/:id',postController.deletePost)


module.exports = router

