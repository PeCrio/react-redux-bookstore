import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBooks } from 'redux/actions/bookActions'

function Table() {

    const dispatch = useDispatch()
    // const bookLoading = useSelector(state => state.book.loading)
    // const error = useSelector(state => state.book.error)
    const bookRecords = useSelector(state => state.book.books)
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])

    return (
        <div className="bg-white rounded-t shadow">
            <div className="px-4 py-3 mb-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative flex-1 flex-grow w-full max-w-full px-2 text-center">
                        <h3 className="text-sm font-bold text-black uppercase">All Books</h3>
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto bg-white">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr className="text-xs font-semibold text-left text-gray-600 uppercase">
                            <th className="px-4 py-3 whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">SN</th>
                            <th className="px-4 py-3 whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">Book</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {
                            bookRecords.map((book, index) => {
                                const { isbn, title, subtitle, author } = book
                                index = index + 1
                                return (
                                    <tr key={isbn}>
                                        <td className="py-4 px-4 font-bold text-xs border-t-0 border-l-0 border-r-0 text-left">
                                            {index}
                                        </td>
                                        <td className="flex">
                                            <div className="self-center h-32 w-32 bg-orange-300"></div>
                                            <div className="px-4 py-8">
                                                <p className="text-xl text-black">{title}</p>
                                                <p className="text-lg text-gray-600">{subtitle}</p>
                                                <p className="text-sm text-blue-700 mb-4">{author}</p>
                                                <div className="flex space-x-2 flex-wrap">
                                                    <Link to={`book/${isbn}`}>
                                                        <button className="bg-blue-800 px-3 py-1 text-xs rounded hover:bg-indigo-200 hover:text-blue-800 text-white">Read</button>
                                                    </Link>
                                                    <button className="px-3 py-1 border border-blue-700 hover:bg-indigo-100 rounded text-blue-700 font-semibold text-xs">Edit</button>
                                                    <button className="px-3 py-1 hover:bg-pink-100 rounded text-red-400 font-semibold text-xs">Delete</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Table
