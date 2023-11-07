export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

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
