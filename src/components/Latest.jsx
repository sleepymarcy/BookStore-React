import { Card, Row, Col, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import books from '../data/fantasy.json'

const Latest = () => {
    return (
        <>
            {
                <Container>
                    <Row className="row-cols-sm-1 row-cols-md-3 row-cols-lg-4">
                        {books.map(book => (
                            <Col className="d-flex align-items-stretch pb-4" key={book.asin}>
                                <Card mt-3>
                                    <Card.Img variant="top" src={book.img} alt={book.title} />
                                    <Card.Body>
                                        
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className="font-weight-bold font-italic text-center"> {book.title} </ListGroup.Item>
                                            <ListGroup.Item>Price: €{book.price}</ListGroup.Item>
                                        </ListGroup>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            }
        </>
    )
}

export default Latest