import { Col, Row, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../redux/actions'

// REGOLE DEGLI HOOKS
// 1) SOLO COMPONENTI A FUNZIONE
// 2) SEMPRE PRIMA DEL RETURN FUORI DA FUNZIONI LOOPS E IF/ELSE

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch() // salvo in una variabile la funzione dispatch, che userò per "dispatchare" azioni

  const user = useSelector((state) => state.user.username)
  // al caricamento della pagina è stringa vuota, se l'utente riempie l'input field allora risulterà loggato

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={bookSelected.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="fw-bold me-1">Description:</span>
                {bookSelected.description}
              </p>
              <p>
                <span className="fw-bold me-1">Price:</span>
                {bookSelected.price}$
              </p>
              {user ? (
                <Button
                  className="d-flex align-items-center"
                  onClick={() => {
                    dispatch(addToCartAction(bookSelected))
                  }}
                >
                  <span className="me-2">AGGIUNGI AL</span>
                  <FaShoppingCart />
                </Button>
              ) : (
                <p>Effettua l'accesso per comprare questo libro</p>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Clicca su un libro per i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail
