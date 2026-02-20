import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons'
import contactImage from '../assets/contacts/contact-amsterdam.png'
import nmsLogo from '../assets/contacts/contact-nms-logo.png'
import './pages.css'

function Contact() {
  return (
    <>
      {/* Contact Hero Section */}
      <section className="page-section">
        <Container className="content-container">
          <Row className="align-items-center g-5">
            <Col md={6} className="text-center text-md-start text-start order-2 order-md-1" data-aos="fade-right">
              <h1>
                <span className="red-text">Contact</span>{' '}
                <span className="blue-text">Us</span>
              </h1>
              <p className="mt-4">
                Ready to revolutionize your fan engagement? Reach out to our team in Amsterdam to discover how SportsTXT can build value for your club!
              </p>
            </Col>
            <Col md={6} className="order-1 order-md-2" data-aos="fade-left">
              <img 
                src={contactImage} 
                alt="Amsterdam" 
                className="img-fluid rounded-3" 
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <div className="gray-wrapper">
        <section className="page-section">
            <Container className="content-container">
            <Row className="g-5">

                {/* Left - Company Info */}
                <Col md={6} className="text-start" data-aos="fade-right">
                <div className="contact-info">
                    <img 
                    src={nmsLogo} 
                    alt="NMS Productions" 
                    className="img-fluid nms-logo mb-4 "
                    />
                    <h5 className="mt-3">Amsterdam Office</h5>
                    <p className="subtitle">NMS PRODUCTIONS EUROPE B.V.</p>

                    <div className="contact-detail mt-3">
                    <EnvironmentOutlined className="contact-detail-icon" />
                    <p className="subtitle">Herengracht 257, 1016 BJ, Amsterdam, The Netherlands</p>
                    </div>

                    <div className="contact-detail mt-2">
                    <MailOutlined className="contact-detail-icon" />
                    <p className="subtitle">example@nms.com</p>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="contact-map mt-4">
                    <iframe
                        title="NMS Productions Amsterdam"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.1234567890!2d4.8897!3d52.3676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzAzLjQiTiA0wrA1Myc0My4wIkU!5e0!3m2!1sen!2snl!4v1234567890"
                        width="100%"
                        height="200"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                    </div>
                </div>
                </Col>

                {/* Right - Contact Form */}
                <Col md={6} className="text-start" data-aos="fade-left">
                <div className="contact-form-wrapper shadow-sm">
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                        type="text"
                        className="contact-input"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                        type="email"
                        className="contact-input"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                        type="tel"
                        className="contact-input"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Industry <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                        type="text"
                        className="contact-input"
                        />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={5}
                        className="contact-input"
                        />
                    </Form.Group>
                    <Button className="btn-primary">Send Message</Button>
                    </Form>
                </div>
                </Col>
            </Row>
            </Container>
        </section>
      </div>
    </>
  )
}

export default Contact