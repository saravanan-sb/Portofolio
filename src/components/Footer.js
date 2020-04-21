import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                    <div className='footer-text border-top'>
                    <p>© 2020 YesBee  <i className="fab fa-forumbee"></i></p>
                    </div>
            </Container>
        </footer>
    );

}

export default Footer;