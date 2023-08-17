// BUILDING FLOW
// model/DB -> controller -> router -> app -> localhost:3000/countries

const db = require('../database/connect')

class Post {

    constructor({ id, date_post, time_post, title, content, category }) {
        this.id = id
        this.date = date_post
        this.time = time_post
        this.title = title
        this.content = content
        this.category = category
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM posts ORDER BY date_post, time_post")
        return response.rows.map(p => new Post(p))
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate post.")
        }
        return new Post(response.rows[0]);
    }

    static async getOneByCat(category) {
        const response = await db.query("SELECT * FROM posts WHERE LOWER(category) = $1", [category])
        if (response.rows.length != 1) {
            throw new Error("Unable to locate post.")
        }
        return new Post(response.rows[0])
    }

    static async create(data) {
        const { date_post, time_post, title, content, category } = data;
        let response = await db.query("INSERT INTO posts (date_post, time_post, title, content, category) VALUES ($1, $2, $3, $4, $5) RETURNING id;",
            [date_post, time_post, title, content, category]);
        const newId = response.rows[0].id;
        const newPost = await Post.getOneById(newId);
        return newPost;
    }
    
    async update(data) {
        const response = await db.query("UPDATE posts SET content = $1 WHERE id = $2 RETURNING title, content;",
            [ data.content, this.id ]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update post.")
        }
        return new Post(response.rows[0]);
    }





}

module.exports = Post