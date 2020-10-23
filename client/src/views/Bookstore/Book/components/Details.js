import React from 'react'
import { useSelector } from 'react-redux'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getBook } from 'redux/actions/bookActions';
// import { useParams } from 'react-router-dom'

function Details() {
    const book = useSelector(state => state.book.book)
    const { title, description, subtitle, author } = book
    // const dispatch = useDispatch()
    // const { id } = useParams();

    // useEffect(() => {
    //     dispatch(getBook(id))
    // }, [id])

    return (
        <div className="bg-white rounded shadow container mx-auto p-6 md:p-8">
            <div className="flex flex-col md:flex-row border-b border-orange-300">
                <div className="md:self-center h-32 w-32 bg-orange-300"></div>
                <div className="md:px-4 py-8">
                    <p className="text-xl text-black">Title: {title}</p>
                    <p className="text-lg text-gray-600 py-1">Subtitle: {subtitle}</p>
                    <p className="text-sm text-blue-700 mb-4">Author: {author}</p>
                </div>
            </div>
            <div className="py-8">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Details
