const express = require('express')
const app = express()
const userRouter = require('./routes/user.route')
const postRouter = require('./routes/post.route')
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`Server listening on port\nhttp://localhost:${PORT}`)
})