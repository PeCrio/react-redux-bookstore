const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        default: Date.now
    }
})

module.exports = Quiz = mongoose.model('books', BookSchema)