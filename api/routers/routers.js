const { Router } = require('express')

const postController = require('../controllers/controller')

const postRouter = Router()

postRouter.get('/', postController.index)

module.exports = postRouter
