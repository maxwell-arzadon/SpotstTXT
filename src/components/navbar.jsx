import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './components.css'

function AppNavbar() {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="app-navbar">
  <Container fluid>
    <Navbar.Brand as={Link} to="/">
      <img src={logo} alt="SportsTXT" height="40" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center gap-4">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/features">Features</Nav.Link>
        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
        <Button as={Link} to="/contact" className="navbar-btn">
          Contact Us
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default AppNavbar