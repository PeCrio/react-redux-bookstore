import axios from 'axios';
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING, UPDATE_BOOK, GET_BOOK } from './types';
import { returnErrors } from './errorActions';

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
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
export const getBook = (id) => (dispatch) => {
    dispatch(setBooksLoading());
    axios
        .get(`/api/book/${id}`)
        .then(res =>
            dispatch({
                type: GET_BOOK,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addBook = (book) => (dispatch) => {
    axios
        .post('/api/books', book)
        .then(res =>
            dispatch({
                type: ADD_BOOK,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const updateBook = (id, book) => (dispatch) => {
    axios
        .put(`/api/book/${id}`, book)
        .then(res =>
            dispatch({
                type: UPDATE_BOOK,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteBook = (id) => (dispatch) => {
    axios
        .delete(`/api/book/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_BOOK,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setBooksLoading = () => {
    return {
        type: BOOKS_LOADING
    };
};