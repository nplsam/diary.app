const express = require('express')
const cors = require('cors')
const logger = require('morgan')

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

module.exports = api