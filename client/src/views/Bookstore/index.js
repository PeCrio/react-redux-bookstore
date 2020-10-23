import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Table from './components/Table'
import Footer from 'components/Footer'

function Bookstore() {
    return (
        <div className="bg-blue-200 min-h-screen">
            <Header />
            <Form />
            <Table />
            <Footer />
        </div>
    )
}

export default Bookstore
