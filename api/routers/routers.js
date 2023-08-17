const { Router } = require('express')

const postController = require('../controllers/controller')

const postRouter = Router()

postRouter.get('/', postController.index)
postRouter.get('/:id', postController.show)
postRouter.get('/:category', postController.showCat)
postRouter.post("/", postController.create)
postRouter.patch("/:id", postController.update)
postRouter.delete("/:id", postController.destroy)

module.exports = postRouter
