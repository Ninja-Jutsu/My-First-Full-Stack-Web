const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, ' Please add a password'],
    minLength: [6, 'Password must be at least 6 chart'],
  },
})

const User = mongoose.model('user', userSchema)

module.exports = User
