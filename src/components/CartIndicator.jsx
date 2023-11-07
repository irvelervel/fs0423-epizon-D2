import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUsernameAction } from '../redux/actions'
// useSelector restituisce un valore a partire da una callback, in cui ricevo come parametro l'intero redux store

// REGOLE DEGLI HOOKS
// 1) SOLO COMPONENTI A FUNZIONE
// 2) SEMPRE PRIMA DEL RETURN FUORI DA FUNZIONI LOOPS E IF/ELSE

const CartIndicator = () => {
  const navigate = useNavigate()
  const cartLength = useSelector((state) => state.cart.content.length) // inizialmente torna 0

  const [inputValue, setInputValue] = useState('')

  // vado a leggermi dal redux store il valore dello username, per capire se l'utente è loggato oppuere no
  // se l'utente NON è ancora loggato, questo componente mostrerà un input field
  // se l'utente È loggato, questo componente mostrerà il bottone con la lunghezza del carrello
  const user = useSelector((state) => state.user.username) // all'inizio è falsy perchè è ''

  const dispatch = useDispatch()

  return (
    <div className="d-flex justify-content-end my-4">
      {/* user ? <-- questo cerca se user è un valore truthy/falsy, ovvero se user è rimasto stringa vuota oppure no */}
      {user ? (
        <>
          <span>Benvenuto, {user}!</span>
          <Button
            onClick={() => navigate('/cart')}
            className="d-flex align-items-center"
          >
            <FaShoppingCart />
            <span className="ms-2">{cartLength}</span>
          </Button>
        </>
      ) : (
        <Form
          onSubmit={(e) => {
            // si aggiornava la pagina :')
            e.preventDefault()
            // controlliamo che il nome non sia unicamente composto da spazi vuoti
            if (inputValue.trim() !== '') {
              dispatch(setUsernameAction(inputValue))
            }
          }}
        >
          <Form.Control
            placeholder="Loggati qua..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
