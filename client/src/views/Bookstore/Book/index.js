import React from 'react'
import Header from './components/Header'
import Footer from 'components/Footer'
import Details from './components/Details'

function Book(props) {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-gray-100">
            <Header />
            <div className="px-4 transform -translate-y-16">
                <Details />
            </div>
            <Footer />
        </div>
    )
}

export default Book
