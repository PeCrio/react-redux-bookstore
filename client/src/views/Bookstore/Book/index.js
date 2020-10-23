import React from 'react'
import Header from './components/Header'
import Footer from 'components/Footer'
import Details from './components/Details'

function Book(props) {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
            <Header />
            <Details />
            <Footer />
        </div>
    )
}

export default Book
