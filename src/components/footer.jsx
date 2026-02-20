import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './components.css'

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="align-items-center">
          <Col className="text-center text-md-start ">
            <img src={logo} alt="SportsTXT" height="40" />
          </Col>
          <Col md={6} className="pt-3 pt-md-0">
            <Nav className="justify-content-center justify-content-md-end gap-4">
              <Link to="/privacy" className="footer-link">Privacy</Link>
              <Link to="/terms" className="footer-link">Terms</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer