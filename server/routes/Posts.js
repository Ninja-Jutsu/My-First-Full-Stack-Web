const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.status(200).json({ userId: post._id })
  } catch (err) {
    console.log(err)
  }
})

router.get('/', async (req, res) => {
  try {
    const listOfPosts = await Post.find()
    res.status(200).send(listOfPosts)
  } catch (err) {
    console.log(err)
  }
})
module.exports = router
