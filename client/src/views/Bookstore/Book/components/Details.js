import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBook } from 'redux/actions/bookActions';
import { useParams } from 'react-router-dom'

function Details() {
    const book = useSelector(state => state.book.book)
    const loading = useSelector(state => state.book.loading)

    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getBook(id))
    }, [id, dispatch])

    return (
        <Fragment>
            <div className="container p-6 mx-auto bg-white rounded shadow md:p-8">
                {
                    loading ?
                        <div className="animate-pulse">
                            <div className="flex flex-col py-2 border-b border-gray-300 md:flex-row">
                                <div className="w-32 h-32 bg-gray-300 md:self-center"></div>
                                <div className="w-full py-8 space-y-4 md:px-4">
                                    <div className="w-3/5 h-6 bg-gray-400"></div>
                                    <div className="w-2/5 h-4 bg-gray-400"></div>
                                    <div className="w-1/6 h-4 mb-4 bg-gray-400"></div>
                                </div>
                            </div>
                            <div className="my-8 space-y-2">
                                <div className="w-full h-4 bg-gray-400"></div>
                                <div className="w-full h-4 bg-gray-400"></div>
                                <div className="w-2/6 h-4 bg-gray-400"></div>
                            </div>
                        </div>
                        :
                        book ?
                            <Fragment>
                                <div className="flex flex-col border-b border-orange-300 md:flex-row">
                                    <div className="w-32 h-32 bg-orange-300 md:self-center"></div>
                                    <div className="py-8 md:px-4">
                                        <p className="text-xl text-black">Title: {book.title}</p>
                                        <p className="py-1 text-lg text-gray-600">Subtitle: {book.subtitle}</p>
                                        <p className="mb-4 text-sm text-blue-700">Author: {book.author}</p>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <p>{book.description}</p>
                                </div>
                            </Fragment>
                            :
                            <div className="p-8 text-center">
                                <p className="text-xl">No records found</p>
                            </div>
                }
            </div>
        </Fragment>
    )
}

export default Details
