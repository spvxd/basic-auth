const express = require('express')
const app = express()
const userRouter = require('./routes/user.route')
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use('/api', userRouter)

app.get('/', (req, res) => {
    res.status(200).send('All work ok')
})

app.listen(PORT, () => {
    console.log(`Server listening on port\nhttp://localhost:${PORT}`)
})