const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const postRouter = require('./routers/routers')

const api = express()

api.use(cors())
api.use(express.json())
api.use(logger('dev'))

api.get('/', (req, res) => {
    res.json({
        name: "Diary API",
        description: "Log your entries in our personal diary!"
    })
})

api.use('/posts', postRouter)

module.exports = api