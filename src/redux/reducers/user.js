// qui vado a dichiarare il reducer del mio store, ovvero quella funzione PURA (da tot input ottengo sempre tot output)
// il cui compito è generare un nuovo stato ogni volta che viene "dispatchata" un'azione

import { SET_USERNAME } from '../actions'

const initialState = {
  username: '', // valore falsy
}

const userReducer = (
  state = initialState, // lo stato attuale, con un valore di default per inizializzarlo con dei valori prefissati
  action // l'ultima azione "dispatchata"
) => {
  // ora descriviamo la logica di funzionamento del reducer
  // dobbiamo dichiarare COME il reducer calcolerà il nuovo stato dell'app!
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
