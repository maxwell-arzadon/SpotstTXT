import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { 
    TeamOutlined, 
    VideoCameraOutlined, 
    AudioOutlined,
    MessageOutlined,
    CameraOutlined,
    BarChartOutlined
} from '@ant-design/icons'
import CTA from '../components/CTA'
import featuresImage from '../assets/features-mockup.png'
import './pages.css'

{/* Feature contents array with icon, title, and description */}
const features = [
    {
        icon: <TeamOutlined className="feature-icon" />,
        title: 'Fanzone',
        description: 'Empower your supporters in the Fanzone, a moderated platform for interaction and involvement. Fans can create public and private subgroups for sharing content and building a supportive community. Enhance your organization\'s community engagement with the Fanzone.'
    },
    {
        icon: <VideoCameraOutlined className="feature-icon" />,
        title: 'Video',
        description: 'Make your members feel special by offering them workouts, interviews, live matches, and even behind-the-scenes content. We support a range of video platforms, so you can easily upload videos from your phone.'
    },
    {
        icon: <AudioOutlined className="feature-icon" />,
        title: 'Podcasts',
        description: 'Weekly updates, interviews, or tip of the week? Record a podcast on your phone and share it with your community.'
    },
    {
        icon: <MessageOutlined className="feature-icon" />,
        title: 'SMS',
        description: 'Want to get your fans instantly involved with the latest updates? Send personalized SMS messages straight to your members\' phones and show them that you value their membership.'
    },
    {
        icon: <CameraOutlined className="feature-icon" />,
        title: 'Photo',
        description: 'Publish photos from games, training sessions or events. There\'s no limit to how much you choose to share. Make it more personal by adding emojis, customizing colors and including text.'
    },
    {
        icon: <BarChartOutlined className="feature-icon" />,
        title: 'Polls',
        description: 'Get real-time feedback from your fans. Ask questions and test their knowledge with our online quizzes and voting features.'
    }
]

function Features() {
    return (
        <>
        {/* Features Hero Section */}
        <section className="page-section">
            <Container className="content-container">
            <Row className="align-items-center g-5">
                <Col md={6} className="text-center text-md-start text-start order-2 order-md-1" data-aos="fade-right">
                <h1>
                    <span className="blue-text">App</span>{' '}
                    <span className="red-text">Features</span>
                </h1>
                <p className="subtitle mt-4">
                    On SportsTXT, you'll find a great mix of features enabling sports clubs and athletes to connect directly with their fans.
                </p>
                </Col>
                <Col md={6} className="order-1 order-md-2" data-aos="fade-left">
                <div>
                    <img 
                    src={featuresImage} 
                    alt="SportsTXT App Features" 
                    className="img-fluid" 
                    />
                </div>
                </Col>
            </Row>
            </Container>
        </section>

        {/* Features Grid */}
        <section className="page-section">
            <Container className="content-container">
                <Row className="g-4">
                    {features.map((feature, index) => (
                    <Col md={4} key={index} className="text-start" data-aos="fade-up">
                        <div className="feature-card shadow-sm">
                        {feature.icon}
                        <h3 className="blue-text mt-3">{feature.title}</h3>
                        <p className="mt-3">{feature.description}</p>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </section>

        <section className="page-section"> 
            <Container className="content-container">
                <CTA />
            </Container>
        </section>
        </>
    )
}

export default Features