// OwnerWorkerSelectionPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Main from "../Assets/Main.gif";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Background from '../Common/Background';
import DarkMode from '../DarkMode/DarkMode';

const OwnerWorkerSelectionPage = () => {
    const navigate = useNavigate();

    const handleSelectRole = (role) => {
        if (role === 'owner') {
            navigate('/owner-registration');
        } else if (role === 'worker') {
            navigate('/worker-registration');
        }
    };


    return (
        <div style={{ position: 'relative' }}>
            <Link to="/Handlooms-connections" className='arrow-icon' style={{ position: "absolute", top: '2rem', left: '2rem', border: '1px solid rgba(var(--bs-link-color-rgb)', padding: '.5rem', borderRadius: '30%' }}>
                <FaArrowLeft className="back-arrow-icon" />
            </Link>
            <div style={{ position: "absolute", top: '2rem', right: '2rem'}}>
                <DarkMode />
            </div>
            <div className="hero-section d-flex justify-content-center align-items-center vh-100">
                {/* <Background /> */}

                <Container className="text-center">

                    <Row className="justify-content-center">
                        <Col>
                            <h1 className="display-4 mb-4" style={{ fontFamily: 'monospace' }}>Select Your Role</h1>
                            <Row className="justify-content-center">
                                <Col sm={6} lg={4} className="mb-4">
                                    <Card className="role-card h-100">
                                        <Card.Body>
                                            <Card.Title className='para-text'>Owner</Card.Title>
                                            <Card.Text className='para-text' style={{ fontFamily: 'Arial sans-serif' }}>
                                                Register as an owner to manage your handloom business.
                                            </Card.Text>
                                            <Link to="/owner-registration">
                                                <Button variant="primary" className='para-text' block onClick={() => handleSelectRole('owner')}>Register as Owner</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} lg={4} className="mb-4">
                                    <Card className="role-card h-100">
                                        <Card.Body>
                                            <Card.Title className='para-text'>Worker</Card.Title>
                                            <Card.Text className='para-text'>
                                                Find job opportunities as a handloom worker.
                                            </Card.Text>
                                            <Link to="/worker-registration">
                                                <Button variant="primary" className='para-text' block onClick={() => handleSelectRole('worker')}>Login as Worker</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default OwnerWorkerSelectionPage;
