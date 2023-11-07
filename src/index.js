import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
// qui dentro dovrò "iniettare" lo state di Redux, dai file index in reducers e store

import store from './redux/store'
import { Provider } from 'react-redux' // perchè devo ora interagire in un ambiente React

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// Provider è un componente proveniente dalla libreria di "collegamento" di Redux in un ambiente React (react-redux)
// Provider va utilizzato come "cornice" per App, in modo da iniettare in App tutta la logica del Redux Store
// Provider necessita di una singola prop, chiamata "store", il cui valore deve essere il risultato di un "configureStore()"
