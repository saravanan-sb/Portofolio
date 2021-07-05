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
                <p>Hello, my name is Saravanan BS. I'm a currently working as a Software Engineer in Squash Apps Pvt.Ltd, Coimbatore TN with 2 years of experience in various Frontend and Backend Technologies.</p>
                
                <h3>Professional Projects</h3>
                <ul>
                    <h5>LifeData.ai - <a href="https://lifedata.ai/" target='_blank'>LifeData.AI</a></h5>
                    <p>AI based platform to quickly integrate software needs for businesses</p>

                    <h5>Give For Golf & Vie For Good - <a href="https://giveforgolf.com/" target='_blank'>Give for Golf</a></h5>
                    <p> A web application used to donate funds for various ngo and keep track of all achievements of various members.</p>

                    <h5>Green Universe</h5>
                    <p>Office space and desk booking application with admin interface, for easy accessibility.</p>

                    <h5>Merican ATS - <i>Private to Organization</i></h5>
                    <p>Managing applicants and jobs posted by various organizations.</p>

                    <h5>CliqPay (App in Development)</h5>
                    <p>Online Wallet, to Send, Receive and Manage Transactions.</p>
                </ul>
                
                <h3>Known Tech Stack.</h3>
                <ul>
                    <p><b>ClientSide:</b> JavaScript</p>
                    <p><b>ServerSide:</b> nodeJs</p>
                    <p><b>Frontend:</b> HTML, CSS, ReactJs, ejs</p>
                    <p><b>Database:</b> MongoDB, Postgres, DocumentDB</p>
                    <p><b>Operations:</b> AWS</p>
                    <p><b>Versioning Tools:</b> Gitlab, Github, Bitubcket</p>
                </ul>

                <p>I'm constantly trying to improve my current skillset, and trying hard to learn new stuffs as well.!</p>
                <p>My latest projects, are available in my Github. You can check it out <a href="https://www.github.com/saravanansb96" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. However, I will be building many more applications in the coming months</p>
                <p>When I'm not learning something new, chances are that I will be reading some book, or hanging out with friends.!</p>
            </Content>
        </div>
    );

}

export default AboutPage;