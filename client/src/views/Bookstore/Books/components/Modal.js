import React, { Fragment } from 'react'
import Form from './Form'

function Modal({ showModal, toggleModal, bookToUpdate, setBookToUpdate }) {
    return (
        showModal ?
            <Fragment>
                <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none customFadeInUp">
                    <div className="flex items-center justify-center">
                        <div className="w-full px-4 py-4 md:max-w-6xl">
                            <div className="flex flex-wrap justify-between p-4 bg-gray-100 border-b rounded-t">
                                <p className="font-semibold">Manage Books</p>
                                <button onClick={() => { toggleModal(); setBookToUpdate({}); }} className="px-2 py-1 text-xs font-semibold text-red-500 border-2 border-red-500 rounded">Close</button>
                            </div>
                            <Form toggleModal={toggleModal} bookToUpdate={bookToUpdate} setBookToUpdate={setBookToUpdate} />
                        </div>
                    </div>
                </div>
                <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
            </Fragment>
            : null
    )
}

export default Modal
