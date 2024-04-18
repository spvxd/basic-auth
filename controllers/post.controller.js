const db = require('../db')

class PostController {

    async createPost(req, res) {
        const {title, content, date, user_id } = req.body
        const newPost = await db.query(`INSERT INTO posts (title, content, date, user_id) VALUES ($1, $2, $3, $4) RETURNING * `, [title, content, date, user_id])
        res.json(newPost.rows[0])
    }
    async getAllPosts(req, res) {
        const allPosts = await db.query('SELECT * FROM posts')
        res.json(allPosts.rows)
    }

    async getOnePost(req, res) {
        const id = req.query.id
        const psot = await db.query(`SELECT * FROM posts WHERE user_id = $1`, [id])
        res.json(post.rows[0])
    }

    async updatePost(req, res) {
        const { id, title, content, date, user_id } = req.body
        const post = await db.query('UPDATE posts SET title = $1, content = $2, date = $3 , user_id = $4 WHERE id = $5 RETURNING *', [title, content, date, user_id, id])
        res.json(post.rows[0])

    }

    async deletePost(req, res) {
        const id = req.params.id
        const post = await db.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id])
        res.json(post.rows[0])
    }



}


module.exports = new PostController()