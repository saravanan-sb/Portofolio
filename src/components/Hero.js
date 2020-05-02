import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
                        {[{ link: <a href="https://www.linkedin.com/in/saravanan-sb/"><i className="fab fa-linkedin-in"></i></a>, text: 'linkedIn' },
                        { link: <a href="https://github.com/saravanansb96"><i className="fab fa-github"></i></a>, text: 'Github' },
                        { link: <a href="https://drive.google.com/uc?export=download&id=1LEombabFo0Dx1MOt7oAkoONd78PHw8yI" download><i class="fas fa-download"></i></a>, text: 'Resume' }].map((placement) => (
                            <>
                                <OverlayTrigger
                                    key={placement.text}
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            {placement.text}
                                        </Tooltip>
                                    }
                                >
                                    {placement.link}
                                </OverlayTrigger>{' '}
                            </>
                        ))}
                    </div>
                </Col>
            </Row>
        </Jumbotron >
    );

}


export default Hero;



