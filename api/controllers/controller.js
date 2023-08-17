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

async function showCat (req, res) {
    try {
        let cat = req.params.category.toLowerCase()
        const post = await Post.getOneByCat(cat)
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ error: err. message })
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

async function update (req, res) {
    try {
        const id = parseInt(req.params.id)
        const data = req.body;
        const post = await Post.getOneById(id);
        const result = await post.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id);
        const postToDelete = await Post.getOneById(id);
        await postToDelete.destroy();
        res.sendStatus(204)
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

module.exports = {
    index,
    show,
    showCat,
    create,
    update,
    destroy
}