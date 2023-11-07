// qui dentro andrò a dichiarare la costruzione del Redux Store
import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers' // punta alla cartella "reducers", che equivale a puntare al file "index.js" contenuto

const store = configureStore({
  reducer: mainReducer, // non ce l'abbiamo ancora!
})

export default store
