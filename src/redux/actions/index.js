export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'
export const GET_BOOKS = 'GET_BOOKS'

// per riutilizzare le azioni, di solito non le si esporta sotto forma di oggetto, ma di FUNZIONE
// questo è un cosiddetto Action Creator, ovvero una funzione che torna una action

export const addToCartAction = (bookSelected) => {
  return {
    type: ADD_TO_CART, // il tipo è a vostra scelta, ricordatevelo e dategli un nome "parlante"!
    payload: bookSelected, // aggiungo anche come payload il libro da mettere nel carrello, altrimenti
    // come farebbe il reducer a capire quale dei libri è quello giusto? :(
  }
}

export const removeFromCartAction = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i,
  }
}

// export const removeFromCartAction = (i) => ({
//   type: REMOVE_FROM_CART,
//   payload: i,
// })

export const setUsernameAction = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  }
}

export const getBooksAction = () => {
  return async (dispatch) => {
    // qui dentro facciamo le fetch() o qualsiasi operazione asincrona
    // una volta ottenuto il risultato voluto, lo dispatcheremo verso il reducer
    // dove otteniamo la funzione dispatch
    // try {
    //   let resp = await fetch(
    //     'https://striveschool-api.herokuapp.com/food-books'
    //   )
    //   if (resp.ok) {
    //     let fetchedBooks = await resp.json()
    //     dispatch({
    //       type: GET_BOOKS,
    //       payload: fetchedBooks,
    //     })
    //   } else {
    //     throw new Error('errore nel recupero dei libri')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
    fetch('https://striveschool-api.herokuapp.com/food-books')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore nel recupero dei libri')
        }
      })
      .then((books) => {
        dispatch({
          type: GET_BOOKS,
          payload: books,
        })
      })
      .catch((err) => {
        console.log('errore', err)
      })
  }
}
