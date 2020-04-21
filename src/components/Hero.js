import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';

function Hero({profilePic, name}) {

    return(
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
                                strings: ['Software Developer.', 'Tech Enthu.', 'Reader.' , 'Social Activist.', 'Listener.'],
                                autoStart: true,
                                loop: false,
                            }}
                            />
                        </div>
                    </Col>
                </Row>
        </Jumbotron>
    );

}


export default Hero;