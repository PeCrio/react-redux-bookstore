import { GET_BOOKS, GET_BOOK, REQUEST_FAILED, BOOKS_LOADING, DELETE_BOOK, ADD_BOOK, UPDATE_BOOK } from "redux/actions/types"

const initialState = {
    books: [],
    book: {},
    loading: false,
    error: ""
}

const bookReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BOOKS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_BOOKS:
            return {
                ...state,
                loading: false,
                books: payload
            }
        case GET_BOOK:
            return {
                ...state,
                loading: false,
                book: payload
            }
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book._id !== payload)
            };
        case UPDATE_BOOK:
            return {
                ...state,
                loading: false,
                books: payload
            }
        case ADD_BOOK:
            return {
                ...state,
                books: [payload, ...state.books]
            };
        case REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default bookReducer