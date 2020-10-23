import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Book from './Book'
import Books from './Books'

function Bookstore() {
    return (
        <Switch>
            <Route path="/bookstore/books" component={Books} />
            <Route path="/bookstore/book/:id" component={Book} />
            <Redirect from='/bookstore' to="/bookstore/books" />
        </Switch>
    )
}

export default Bookstore
