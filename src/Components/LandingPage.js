import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import landingImage from "../Assets/Landing.png";
import Main from "../Assets/Main.gif";
import { Link } from 'react-router-dom';
import Background from '../Common/Background';
import DarkMode from '../DarkMode/DarkMode'

const LandingPage = () => {
    return (
        <div className="hero-section d-flex justify-content-center align-items-center vh-100" style={{position: "relative"}}>
            {/* Background Image with Blur */}
            {/* <Background /> */}
            <div style={{position: "absolute", top : '2rem', right: '2rem'}}>
                <DarkMode />
            </div>
            {/* Content */}
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col style={{
                        display: "flex",
                        justifyContent: "center", // horizontally center the content
                        alignItems: "center", // vertically center the content
                        flexDirection: "column"
                    }}>
                        <h1 className="welcome display-4 mb-4" >Welcome to Handlooms</h1>

                        <div
                            className="mb-4"
                            style={{
                                border: '2px solid #EDFFFF',
                                width: '350px',
                                height: '350px',
                                background: "#EDFFFF",
                                borderRadius: "50%",
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center", // horizontally center the content
                                alignItems: "center", // vertically center the content
                                flexDirection: "column"
                            }}
                        >
                            <img
                                src={landingImage}
                                alt="Handloom"
                                className="handloom-image img-fluid highlight-image"
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                        <Link to="/selection">
                            <Button variant="primary" size="lg" role="button">Explore Now</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default LandingPage;
