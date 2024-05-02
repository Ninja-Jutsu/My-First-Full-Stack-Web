const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const postRouter = require('./routes/Posts')
require('dotenv').config()

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// Routers
app.use('/api/posts', postRouter)

// connect to the db
const dbLink = process.env.DB_URL
mongoose
  .connect(dbLink)
  .then(() => {
    console.log(`Connected to MongoDB..`)
  })
  .catch((err) => console.log(err))

// Connect to port
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on Port ${port}`))
