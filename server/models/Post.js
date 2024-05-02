const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 5,
    maxLength: 20,
    required: [true, 'Please enter an email'],
  },
  des: {
    type: String,
    required: [true, ' Please add a password'],
  },
  createdBy: {
    type: String,
    default: 'Anonymous'
  }, 
  createdOn: {
    type: Date,
    default: new Date()
  }
})

const User = mongoose.model('post', postSchema)

module.exports = User