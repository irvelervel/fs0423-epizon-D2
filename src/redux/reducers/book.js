import { GET_BOOKS } from '../actions'

const initialState = {
  stock: [], // questo array ospiterà i libri risultanti dalla fetch effettuata su /food-books
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        stock: action.payload, // un array pieno di libri!
      }

    default:
      return state
  }
}

export default bookReducer
