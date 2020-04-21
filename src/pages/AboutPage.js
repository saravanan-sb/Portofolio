import React from 'react';
import Content from '../components/Content';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props) {

    return (
        <div className='pad-wrap'>
            <Jumbotron className="jumbotron-fluid bg-transparent  p-2">
                <Row className="justify-content-center">
                    <Col md={8} sm={12}>
                        <p className='about-title'>{props.title}</p>
                    </Col>
                </Row>
            </Jumbotron>
            <Content>
                <p>Hello, my name is Saravanan BS, friends call me YesBee. I'm a full stack developer with experience in Javascript, ReactJs, Express JS, Node JS, Oracle SQL and MongoDB.</p>


                <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

                <p>My latest projects, are available in my Github. You can check it out <a href="https://www.github.com/saravanansb96" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. However, I will be building many more applications in the coming months</p>

                <p>When I'm not learning something new chances are that I will be reading some book, or hanging out with friends.!</p>
            </Content>
        </div>
    );

}

export default AboutPage;