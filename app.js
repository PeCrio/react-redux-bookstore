const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const app = express()
module.exports = app


app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const db = config.get('mongoURI')
mongoose.
    connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('MongoDb connected...'))
    .catch(err => console.log(err))

app.use('/api/books', require('./server/routes/api/books'))

const path = require('path')
// app.use('*', express.static(path.join(__dirname, 'client', 'index.html')))

// Serve react client static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}