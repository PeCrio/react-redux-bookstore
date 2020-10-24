import axios from 'axios';
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING, UPDATE_BOOK, GET_BOOK } from './types';
import Swal from 'sweetalert2';

export const getBooks = () => (dispatch) => {
    dispatch(setBooksLoading());
    axios
        .get('/api/books')
        .then(res =>
            dispatch({
                type: GET_BOOKS,
                payload: res.data
            })
        )
        .catch(err => {
            if (err.response) {
                Swal.fire("Oops", err.response.data.msg, "error")
            } else if (err.request) {
                Swal.fire("Oops", "Please check your internet connection and reload the page", "error")
            } else {
                Swal.fire("Oops", "An error occured, please try again later", "error")
            }
        });
};
export const getBook = (id) => (dispatch) => {
    dispatch(setBooksLoading());
    axios
        .get(`/api/books/${id}`)
        .then(res =>
            dispatch({
                type: GET_BOOK,
                payload: res.data
            })
        )
        .catch(err => {
            if (err.response) {
                Swal.fire("Oops", err.response.data.msg, "error")
            } else if (err.request) {
                Swal.fire("Oops", "Please check your internet connection and reload the page", "error")
            } else {
                Swal.fire("Oops", "An error occured, please try again later", "error")
            }
        });
};

export const addBook = (book) => (dispatch) => {
    axios
        .post('/api/books', book)
        .then(res => {
            dispatch({
                type: ADD_BOOK,
                payload: book
            })
            Swal.fire('Greet!', 'This book has been added to the store', 'success')
        })
        .catch(err => {
            if (err.response) {
                Swal.fire("Oops", err.response.data.msg, "error")
            } else if (err.request) {
                Swal.fire("Oops", "Please check your internet connection and reload the page", "error")
            } else {
                Swal.fire("Oops", "An error occured, please try again later", "error")
            }
        });
};

export const updateBook = (id, book) => (dispatch) => {
    axios
        .put(`/api/books/${id}`, book)
        .then(res => {
            dispatch({
                type: UPDATE_BOOK,
                payload: book
            })
            Swal.fire('Greet!', 'This book has been updated successfully', 'success')
        })
        .catch(err => {
            if (err.response) {
                Swal.fire("Oops", err.response.data.msg, "error")
            } else if (err.request) {
                Swal.fire("Oops", "Please check your internet connection and reload the page", "error")
            } else {
                Swal.fire("Oops", "An error occured, please try again later", "error")
            }
        });
};

export const deleteBook = (id) => (dispatch) => {
    Swal.fire({
        title: 'Warning?',
        text: `Are you sure you want to delete this book?`,
        icon: 'warning',
        confirmButtonText: `Delete`,
        showCancelButton: true,
    }).then(proceed => {
        if (!proceed.isConfirmed) return Swal.fire('Whew!', 'The book is safe', 'info')
        axios
            .delete(`/api/books/${id}`)
            .then(res => {
                Swal.fire('Deleted!', 'This book has been deleted', 'success')
                dispatch({
                    type: DELETE_BOOK,
                    payload: id
                })
            })
            .catch(err => {
                if (err.response) {
                    Swal.fire("Oops", err.response.data.msg, "error")
                } else if (err.request) {
                    Swal.fire("Oops", "Please check your internet connection and reload the page", "error")
                } else {
                    Swal.fire("Oops", "An error occured, please try again later", "error")
                }
            });
    })
};

export const setBooksLoading = () => {
    return {
        type: BOOKS_LOADING
    };
};