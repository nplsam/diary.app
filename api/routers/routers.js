const { Router } = require('express')

const postController = require('../controllers/controller')

const postRouter = Router()

postRouter.get('/', postController.index)
postRouter.get('/:id', postController.show)


module.exports = postRouter
