import { Container, Row, Col, Button } from 'react-bootstrap'
import ctaGraphic from '../assets/cta-graphic.png'
import './components.css'

function CTA() {
  return (
    <div className="cta-section">
        <Row className="align-items-center">
          <Col md={8} className="text-start ps-5">
            <h1>
                <span className="blue-text">Get in</span> {' '}
                <span className="red-text">Touch!</span>
            </h1>
            <p className="subtitle">Build A Unified Community with SportsTXT</p>
            <Button className="cta-btn">Contact Our Team</Button>
          </Col>
          <Col md={4} className="text-end">
            <img src={ctaGraphic} alt="" className="img-fluid cta-graphic"/>
          </Col>
        </Row>
    </div>
  )
}

export default CTA