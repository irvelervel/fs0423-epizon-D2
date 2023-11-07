// qui dentro andrò a dichiarare la costruzione del Redux Store
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cart' // punta alla cartella "reducers", che equivale a puntare al file "index.js" contenuto
import userReducer from '../reducers/user' // punta alla cartella "reducers", che equivale a puntare al file "index.js" contenuto
import bookReducer from '../reducers/book'

// creiamo un reducer "combinato", formato da user e cart
const bigReducer = combineReducers({
  // assegno ad ogni "fetta" del redux store il reducer che d'ora in poi se ne prenderà cura
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,
})

const store = configureStore({
  reducer: bigReducer, // ora il valore della proprietà reducer non è né cartReducer né userReducer, ma la combinazione dei due!
})

export default store
