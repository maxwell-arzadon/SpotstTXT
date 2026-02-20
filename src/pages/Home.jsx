import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './pages.css'
import CTA from '../components/cta'

import phoneMockup from '../assets/hero/home-sportstxt.png'
import about from '../assets/hero/home-mission.png'
import athletes from '../assets/hero/home-athletes.png'


function Home() {
  return (
    <>
    {/* Hero Section */}
      <section className="hero-home" data-aos="fade-down">
        <Container className="content-container">
          <Row className="justify-content-center">
            <Col>
              <h1 className="hero-title">
                Creating Value Off the Pitch with a{' '}
                <span className="fan">Fan</span>{' '}
                <span className="first">First</span>{' '}
                Engagement Platform
              </h1>
              <p className="hero-subtitle">
                Find fellow fans of your favorite teams! Create an account now 
                and join the millions of sports enthusiasts around the world!
              </p>
              <Button className="btn-accent">Become a Member</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What is SportsTXT? */}
      <section className='page-section' data-aos="fade-down">
        <Container className="content-container">
          <h1>
            <span className="blue-text">What Is</span>{' '}
            <span className="red-text">SportsTXT?</span>
          </h1>
          <p className="subtitle mt-4">
            Being a sports fan is not just about watching games. SportsTXT is an online platform designed to deliver the ultimate sports fan experience. Engage with other fans, get insider facts about your favorite teams, and so much more.
          </p>
          <img 
            src={phoneMockup} 
            alt="SportsTXT App" 
            className="img-fluid" 
          />
        </Container>
      </section>

      {/* Our Mission */}
      <section className='page-section' data-aos="fade-right">
        <Container className="content-container">
          <Row className="align-items-center g-5">
            <Col md={6} className="text-center text-md-start">
              <h1>
                <span className="blue-text">Our</span>{' '}
                <span className="red-text">Mission</span>
              </h1>
              <p className="subtitle mt-4">
                Our mission is to provide our users with a seamless and enjoyable online experience, offering a diverse range of high-quality content and services that inform, inspire, and engage. Through innovative design and intuitive functionality, we aim to create a platform that connects people and facilitates meaningful interactions.          
              </p>
            </Col>  
            <Col md={6}>
              <img 
                src={about} 
                alt="Happy person using phone" 
                className="img-fluid rounded-4" 
              />           
            </Col>         
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className='page-section' data-aos="fade-left">
        <Container className="content-container">
          <Row className="align-items-center g-5">
            <Col md={6} className="order-2 order-md-1">
              <img 
                src={athletes} 
                alt="Athletes hugging each other" 
                className="img-fluid rounded-4" 
              />     
            </Col>  
            <Col md={6} className="text-center text-md-start order-1 order-md-2">
              <h1>
                <span className="blue-text">How it</span>{' '}
                <span className="red-text">Works</span>
              </h1>
              <p className="subtitle mt-4">
                SportsTXT is a fully customizable community platform that connects directly with members and fans in real-time giving them a true sense of belonging.               
              </p>   
              <p className="subtitle mt-4">
                It provides sports clubs and teams with a unique opportunity to create more personalized experiences and open up new revenue streams. You’ll be able to capture valuable data and tailor content to specific member segments.              
              </p>
            </Col>         
          </Row>
        </Container>
      </section>

      {/* The Platform of Firsts */}
      <div className="firsts-wrapper">
        <section className="page-section" data-aos="fade-up">
          <Container className="content-container">
            <h1 className="mb-5">
              <span className="blue-text">The Platform of</span>{' '}
              <span className="red-text">Firsts</span>
            </h1>
            <Row className="g-4">
              <Col md={6}>
                <div className="platform-card text-center shadow-sm" data-aos="fade-up">
                  <h2>
                    <span className="red-text">Members</span>{' '}
                    <span className="blue-text">First</span>
                    <p></p>
                  </h2>
                  <p>
                    It's time to elevate your fan engagement beyond just using social media and SportsTXT brings your members straight into the heart of your club through exclusive stories, new experiences, games and unique offers
                  </p>
                </div>
              </Col>  
              <Col md={6}>
                <div className="platform-card text-center shadow-sm" data-aos="fade-up">
                  <h2>
                    <span className="red-text">Safety</span>{' '}
                    <span className="blue-text">First</span>
                    <p></p>
                  </h2>
                  <p>
                    SportsTXT offers 24/7 protection for sports clubs with real-time monitoring and content analysis powered by a combination of human expertise and AI technology. With SportsTXT, clubs can be confident in the quality and safety of their reputation and all user-generated content.                
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="platform-card text-center shadow-sm" data-aos="fade-up">
                  <h2>
                    <span className="red-text">Data</span>{' '}
                    <span className="blue-text">First</span>
                    <p></p>
                  </h2>
                  <p>
                    Contrary to social media, you have full ownership of your data. Your personal dashboard collects and analyzes important insights about members' usage of the platform, demographics and other data to help you make better business decisions.              
                  </p>
                  </div>
              </Col>
              <Col md={6}>
                <div className="platform-card text-center shadow-sm" data-aos="fade-up">
                  <h2>
                    <span className="red-text">Value</span>{' '}
                    <span className="blue-text">First</span>
                    <p></p>
                  </h2>
                  <p>
                    By making a few small tweaks in the way you present your content, you will be amazed at how it can significantly boost your profits. You have the opportunity to set your content prices based on your own judgment and enhance its worth with the support of sponsors.
                  </p>
                </div>
              </Col>                    
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

export default Home