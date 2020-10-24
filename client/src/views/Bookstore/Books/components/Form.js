import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { updateBook } from "redux/actions/bookActions";
import { addBook } from "redux/actions/bookActions";
import { useDispatch } from "react-redux";

export default function BookForm({ bookToUpdate }) {
    const dispatch = useDispatch()
    const initialValues = JSON.stringify(bookToUpdate) === '{}' ?
        {
            title: '',
            subtitle: '',
            author: '',
            publisher: '',
            description: ''
        }
        :
        {
            title: bookToUpdate.title,
            subtitle: bookToUpdate.subtitle,
            author: bookToUpdate.author,
            publisher: bookToUpdate.publisher,
            description: bookToUpdate.description
        }
    const onSubmit = (values, { setSubmitting, resetForm }) => {
        if (JSON.stringify(bookToUpdate) === '{}') {
            dispatch(addBook(values))
        } else {
            dispatch(updateBook(bookToUpdate._id, { _id: bookToUpdate._id, ...values }))
        }
        setSubmitting(false)
    }
    const validationSchema = Yup.object({
        title: Yup.string().required('Required').min(3, 'Cannot be less than 3 letters'),
        subtitle: Yup.string().required('Required').min(3, 'Cannot be less than 3 letters'),
        author: Yup.string().required('Required').min(3, 'Cannot be less than 3 letters'),
        publisher: Yup.string().required('Required').min(3, 'Cannot be less than 3 letters'),
        description: Yup.string().required('Required').min(3, 'Cannot be less than 3 letters'),
    })
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                ({ values, isSubmitting }) =>
                    <Form className={`block w-full p-4 bg-white rounded-b lg:p-8 ${isSubmitting && 'cursor-wait'}`}>

                        <div className="w-full space-y-4">
                            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                                <div className="flex-1">
                                    <label className="form_label" htmlFor="title">Title</label>
                                    <Field id="title" name="title" placeholder="Title" className="form_input" disabled={isSubmitting} />
                                    <ErrorMessage name="title" component="p" className="mt-2 text-xs text-red-500" />
                                </div>
                                <div className="flex-1">
                                    <label className="form_label" htmlFor="subtitle">Subtitle</label>
                                    <Field id="subtitle" name="subtitle" placeholder="Subtitle" className="form_input" disabled={isSubmitting} />
                                    <ErrorMessage name="subtitle" component="p" className="mt-2 text-xs text-red-500" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                                <div className="flex-1">
                                    <label className="form_label" htmlFor="author">Author</label>
                                    <Field id="author" name="author" placeholder="Author" className="form_input" disabled={isSubmitting} />
                                    <ErrorMessage name="author" component="p" className="mt-2 text-xs text-red-500" />
                                </div>
                                <div className="flex-1">
                                    <label className="form_label" htmlFor="publisher">Publisher</label>
                                    <Field id="publisher" name="publisher" placeholder="Publisher" className="form_input" disabled={isSubmitting} />
                                    <ErrorMessage name="publisher" component="p" className="mt-2 text-xs text-red-500" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="form_label" htmlFor="description">Description</label>
                                <Field as="textarea" id="description" name="description" placeholder="description" className="form_input" disabled={isSubmitting} />
                                <ErrorMessage name="description" component="p" className="mt-2 text-xs text-red-500" />
                            </div>
                            <button type="submit" className={`w-full px-3 py-2 leading-tight text-white ${isSubmitting ? 'bg-gray-400 animate-pulse' : 'bg-blue-500'} border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}>{isSubmitting ? 'Submitting, please wait...' : 'Submit'}</button>
                        </div>
                    </Form>
            }
        </Formik>
    )
}



