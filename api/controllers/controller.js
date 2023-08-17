const Post = require('../models/Post')

async function index (req, res) {
    try {
        const posts = await Post.getAll()
        res.json(posts)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}



module.exports = {
    index
}