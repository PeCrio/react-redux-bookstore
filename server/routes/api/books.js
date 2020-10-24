const Book = require("../../models/Book");
const router = require('express').Router()

// @route   '/api/books'
// @desc    Get all books records
// @access  Public
router.get('/', (req, res) => {
    Book.find()
        .then(book => {
            res.json(book)
        })
        .catch(err => res.json({ msg: 'Oops an error occured in handling your request, kindly check your internet connection or try again later', success: false }))
})

// @route   '/api/books'
// @desc    Get a single book record
// @access  Public
router.get('/:id', (req, res) => {
    const { id } = req.params
    Book.findOne({ _id: id })
        .then(book => {
            res.json(book)
        })
        .catch(err => res.status(400).json({ msg: `No book exist with the id of ${id}` }))
})

// @route   '/api/books'
// @desc    Create a new book record
// @access  Private
router.post('/', (req, res) => {
    const { title, subtitle, author, publisher, description } = req.body
    if (!title || !subtitle || !author || !publisher || !description) return res.status(400).json({ msg: 'All fields are required!' })

    Book.findOne({ title })
        .then(book => {
            if (book) return res.status(400).json({ msg: "A book already exist with this title" })

            const NewBook = new Book({ title, subtitle, author, publisher, description })
            NewBook.save()
                .then(book => {
                    res.json({ msg: 'Book created successfully', book })
                })
                .catch(err => res.status(400).json({ msg: 'An error occured creating this book' }))
        })
        .catch(err => res.json({ msg: 'Oops an error occured in handling your request, kindly check your internet connection or try again later', success: false }))
    // .catch(err => res.json({ error: err.message, success: false }))
})

// @route   '/api/books/:id'
// @desc    Update a book record
// @access  Private
router.put('/:id', (req, res) => {

    Book.findById(req.params.id)
        .then(book => {
            const { title, subtitle, author, publisher, description } = book
            const { title: new_title, subtitle: new_subtitle, author: new_author, publisher: new_publisher, description: new_description } = req.body
            Book.findOne({ title: new_title })
                .then(titleExists => {
                    if (title !== new_title) if (titleExists) return res.status(400).json({ msg: "A book already exist with this title" })
                    updatedBook = {
                        $set: {
                            title: !new_title ? title : new_title,
                            subtitle: !new_subtitle ? subtitle : new_subtitle,
                            author: !new_author ? author : new_author,
                            publisher: !new_publisher ? publisher : new_publisher,
                            description: !new_description ? description : new_description
                        }
                    }
                    Book.updateOne(book, updatedBook)
                        .then(() => res.json({ msg: 'Book updated successfully' }))
                })
        })
        .catch(err => res.status(404).json({ msg: `No book found with the id of ${req.params.id}` }))


})

// @route   DELETE api/books/:id
// @desc    Delete a book
// @access  Private
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Book.findById(id)
        .then(book => {
            book.remove()
                .then(() => res.status(204).json({ success: true }))
                .catch(err => {
                    res.status(400).json({ msg: `An error occured deleting the book with the id: ${id}` })
                })
        })
        .catch(err => res.status(404).json({ msg: `No book found with the id of ${req.params.id}` }))
})

module.exports = router