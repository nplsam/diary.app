const Post = require('../models/Post')

async function index (req, res) {
    try {
        const posts = await Post.getAll()
        res.json(posts)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.id)
        const posts = await Post.getOneById(id)
        res.json(posts)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

async function create (req, res) {
    try {
        const data = req.body;
        const result = await Post.create(data);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
}





module.exports = {
    index,
    show,
    create
}