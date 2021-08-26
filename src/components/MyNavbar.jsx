import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = (props) => {

    return(
        <Navbar collapseOnSelect expand="lg" bg={props.color} variant={props.color}>
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="App.js">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar