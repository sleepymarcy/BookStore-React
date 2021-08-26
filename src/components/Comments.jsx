import { Card } from 'bootstrap'

const Comments = ({ comment }) => (
    comment ? (
        <>
            {
                <Card>
                    <Card.Header>Comments on this book</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '} {' '}
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            }
        </>
    ) : (
        pass
    )
)

export default Comments