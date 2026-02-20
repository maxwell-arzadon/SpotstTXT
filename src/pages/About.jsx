import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CTA from '../components/CTA'
import aboutImage from '../assets/about/about-service.png'
import './pages.css'

import raffy from '../assets/about/raffy.png'
import sheena from '../assets/about/sheena.png'
import ronalyn from '../assets/about/ronalyn.png'
import karlo from '../assets/about/karlo.png'
import virginia from '../assets/about/virginia.png'

const people = [
  {
    image: raffy,
    name: 'Raffy',
    role: 'Chief Executive Officer'
  },
  {
    image: sheena,
    name: 'Sheena',
    role: 'Director of Operations'
  },
  {
    image: ronalyn,
    name: 'Ronalyn',
    role: 'Director of Finance'
  },
  {
    image: karlo,
    name: 'Karlo',
    role: 'Director of IT Department'
  },
  {
    image: virginia,
    name: 'Virginia',
    role: 'Director of HR & Admin'
  }
]

function About() {
    return (
        <>
        {/* About Hero Section */}
        <section className="page-section">
            <Container className="content-container">
            <Row className="align-items-center g-5">
                <Col md={6} className="text-start text-center text-md-start text-start order-2 order-md-1" data-aos="fade-right"> 
                <h1>
                    <span className="red-text">About</span>{' '}
                    <span className="blue-text">Us</span>
                </h1>
                <p className="mt-4">
                    SportsTXT is an initiative from NMS Productions BV, a division of New Media Services, a global company specializing in delivering intelligent outsourcing services through a combination of machine learning and human-powered activities.
                </p>
                <p className="mt-4">
                    From fans to brands to individual content creators, NMSP designs and builds collaborative online platforms for our users to communicate, connect, learn, and share.
                </p>
                </Col>
                <Col md={6}  className="order-1 order-md-2" data-aos="fade-left">
                <div className="about-image-wrapper">
                    <img 
                    src={aboutImage} 
                    alt="NMS Productions Building" 
                    className="img-fluid rounded-3" 
                    />
                </div>
                </Col>
            </Row>
            </Container>
        </section>

        {/* Key People Section */}
        <div className="gray-wrapper">
            <section className="page-section">
                <Container className="content-container text-start">
                <h1 className="mb-5" data-aos="fade-right">
                    <span className="blue-text">Key</span>{' '}
                    <span className="red-text">People</span>
                </h1>
                <Row className="g-4" >
                    {people.map((person, index) => (
                    <Col md={4} key={index} className="text-start" data-aos="fade-up">
                        <div className="people-card shadow-sm">
                        <img
                            src={person.image}
                            alt={person.name}
                            className="img-fluid rounded-3"
                        />
                        <div className="people-card-info">
                            <h3 className="blue-text mt-3">{person.name}</h3>
                            <p className="subtitle">{person.role}</p>
                        </div>
                        </div>
                    </Col>
                    ))}
                </Row>
                </Container>
            </section>
        </div>

        <section className="page-section"> 
            <Container className="content-container">
                <CTA />
            </Container>
        </section>
    </>
  )
}

export default About