import React from 'react'
import { Link } from 'react-router-dom'
import bookStoreImage from 'assets/img/bookstore.jpg'

function Header() {
    return (
        <div className="flex flex-col md:flex-row bg-blue-100 min-h-screen">
            <div className="w-full md:w-2/5 bg-left bg-no-repeat bg-cover h-64 md:h-auto md:min-h-full" style={{ backgroundImage: `url('${bookStoreImage}')` }}></div>
            <div className="w-full md:w-3/5 py-16 md:py-48 px-4 md:px-8 lg:px-16">
                <div className="flex items-center justify-center h-full">
                    <div className="max-w-2xl">
                        <h2 className="font-bold text-3xl md:text-4xl text-blue-800">Bookstore Manager</h2>
                        <h6 className="py-8 text-gray-700">A simple web application that manages books in a bookstore..</h6>
                        <Link to="/bookstore">
                            <button className="rounded py-2 px-4 bg-blue-800 text-white hover:bg-indigo-200 hover:text-blue-800">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
