import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';

function Hero({ profilePic, name }) {

    return (
        <Jumbotron className="jumbotron-fluid p-2 jumbo">
            <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                    <div className='profilePic'>
                        <img src={profilePic} alt='profile' />
                    </div>
                    <div className='profileName'>
                        <p>{name}</p>
                    </div>

                    <div className='profileDesc'>
                        <Typewriter
                            options={{
                                strings: ['Software Developer.', 'Tech Enthu.', 'Reader.', 'Social Activist.', 'Listener.'],
                                autoStart: true,
                                loop: false,
                            }}
                        />
                    </div>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/saravanan-sb/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/saravanansb96"><i className="fab fa-github"></i></a>
                        <a href="https://drive.google.com/uc?export=download&id=1LEombabFo0Dx1MOt7oAkoONd78PHw8yI" download><i class="fas fa-download"></i></a>
                    </div>
                </Col>
            </Row>
        </Jumbotron>
    );

}


export default Hero;



