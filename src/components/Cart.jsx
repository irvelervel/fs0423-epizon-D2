import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCartAction } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// REGOLE DEGLI HOOKS
// 1) SOLO COMPONENTI A FUNZIONE
// 2) SEMPRE PRIMA DEL RETURN FUORI DA FUNZIONI LOOPS E IF/ELSE

const Cart = () => {
  const cart = useSelector((state) => state.cart.content)
  const dispatch = useDispatch()
  const isUserLoggedIn = useSelector((state) => state.user.username)
  const navigate = useNavigate()
  const availableBooks = useSelector((state) => state.book.stock.length) // torna QUANTI libri ci sono nello store

  // proteggiamo la rotta /cart da un utente non loggato
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/')
    }
  }, [isUserLoggedIn, navigate])

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cart.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(removeFromCartAction(i))
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Col>
        <Row>
          <Col sm={12} className="fw-bold mb-3 ms-4">
            TOTALE:{' '}
            {cart.reduce(
              (acc, currentValue) => acc + parseFloat(currentValue.price),
              0
            )}
            $
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>Ci sono {availableBooks} libri disponibili.</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Cart
