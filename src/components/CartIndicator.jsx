import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
// useSelector restituisce un valore a partire da una callback, in cui ricevo come parametro l'intero redux store

// REGOLE DEGLI HOOKS
// 1) SOLO COMPONENTI A FUNZIONE
// 2) SEMPRE PRIMA DEL RETURN FUORI DA FUNZIONI LOOPS E IF/ELSE

const CartIndicator = () => {
  const navigate = useNavigate()
  const cartLength = useSelector((state) => state.cart.content.length) // inizialmente torna 0

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{cartLength}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
