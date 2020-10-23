import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="h-screen bg-blue-800 text-white flex justify-center items-center text-center flex-col">
            <h1 className="text-4xl">Bookstore Manager</h1>
            <Link to="bookstore" className="text-lg text-blue-300">Get started</Link>
        </div>
    )
}

export default Header
