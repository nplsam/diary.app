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



}

module.exports = Post