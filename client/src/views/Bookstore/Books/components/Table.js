import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBook } from 'redux/actions/bookActions'
import { getBooks } from 'redux/actions/bookActions'

function Table() {

    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => setShowModal(prevState => !prevState)

    const dispatch = useDispatch()

    const loading = useSelector(state => state.book.loading)
    const error = useSelector(state => state.book.error)

    const books = useSelector(state => state.book.books)
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
                            error ?
                                <div className="m-4">
                                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <strong class="font-bold">Oops!</strong>
                                        <span class="block sm:inline"> An error occured {/* error */}.</span>
                                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                        </span>
                                    </div>
                                </div>
                                :
                                loading ?
                                    <Fragment>
                                        <tr className="animate-pulse">
                                            <td className="px-4 py-4 text-xs font-bold text-left border-t-0 border-l-0 border-r-0">
                                                <div className="w-4 h-6 bg-gray-400"></div>
                                            </td>
                                            <td className="flex flex-col md:flex-row">
                                                <div className="w-32 h-32 mt-4 bg-gray-400 md:self-center"></div>
                                                <div className="w-full py-8 space-y-2 md:pl-4">
                                                    <div className="w-3/5 h-6 bg-gray-400"></div>
                                                    <div className="w-2/5 h-4 bg-gray-400"></div>
                                                    <div className="w-1/6 h-4 mb-4 bg-gray-400"></div>
                                                    <div className="flex flex-wrap space-x-2">
                                                        <div className="w-16 h-6 bg-gray-400 rounded"></div>
                                                        <div className="w-16 h-6 bg-gray-400 rounded"></div>
                                                        <div className="w-16 h-6 bg-gray-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="animate-pulse">
                                            <td className="px-4 py-4 text-xs font-bold text-left border-t-0 border-l-0 border-r-0">
                                                <div className="w-4 h-6 bg-gray-400"></div>
                                            </td>
                                            <td className="flex flex-col md:flex-row">
                                                <div className="w-32 h-32 mt-4 bg-gray-400 md:self-center"></div>
                                                <div className="w-full py-8 space-y-2 md:pl-4">
                                                    <div className="w-3/5 h-6 bg-gray-400"></div>
                                                    <div className="w-2/5 h-4 bg-gray-400"></div>
                                                    <div className="w-1/6 h-4 mb-4 bg-gray-400"></div>
                                                    <div className="flex flex-wrap space-x-2">
                                                        <div className="w-16 h-6 bg-gray-400 rounded"></div>
                                                        <div className="w-16 h-6 bg-gray-400 rounded"></div>
                                                        <div className="w-16 h-6 bg-gray-400 rounded"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </Fragment>
                                    :
                                    books.length > 0 ?

                                        books.map((book, index) => {
                                            const { _id, title, subtitle, author } = book
                                            index = index + 1
                                            return (
                                                <tr key={_id}>
                                                    <td className="px-4 py-4 text-xs font-bold text-left border-t-0 border-l-0 border-r-0">
                                                        {index}
                                                    </td>
                                                    <td className="flex flex-col md:flex-row">
                                                        <div className="w-32 h-32 mt-4 bg-orange-300 md:mt-0 md:self-center"></div>
                                                        <div className="py-8 pr-4 md:pr-0 md:px-4">
                                                            <p className="text-xl text-black">{title}</p>
                                                            <p className="text-lg text-gray-600">{subtitle}</p>
                                                            <p className="mb-4 text-sm text-blue-700">{author}</p>
                                                            <div className="flex flex-wrap space-x-2">
                                                                <Link to={`book/${_id}`}>
                                                                    <button className="px-3 py-1 text-xs text-white bg-blue-800 rounded hover:bg-indigo-200 hover:text-blue-800">Read</button>
                                                                </Link>
                                                                <button onClick={toggleModal} className="px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-700 rounded hover:bg-indigo-100">Edit</button>
                                                                <button onClick={() => dispatch(deleteBook(_id))} className="px-3 py-1 text-xs font-semibold text-red-400 rounded focus:bg-pink-300 hover:bg-pink-100">Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td colSpan="2" className="p-8 text-center">
                                                <p>No book found</p>
                                            </td>
                                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Table
