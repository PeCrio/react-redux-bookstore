import React from 'react'
import readBookImage from 'assets/img/readbook.jpg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${readBookImage}')` }}>
                <div className="w-full flex justify-center bg-black bg-opacity-75" style={{ height: '50vh' }}>
                    <div className="max-w-2xl flex items-center py-24">
                        <div className="flex flex-col items-center text-center text-white space-y-4">
                            <p className="text-3xl lg:text-5xl font-semibold">Reading helps you grow</p>
                            <Link to="/bookstore/books" className="text-blue-200 text-sm">All Books</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
