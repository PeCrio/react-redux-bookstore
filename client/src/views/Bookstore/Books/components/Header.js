import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="p-8 bg-blue-800">
            <h3 className="text-blue-300 text-xl font-semibold"> Welcome to the bookstore</h3>
            <Link to='/get-started' className="text-sm text-blue-100">Go Home</Link>
        </div>
    )
}

export default Header
