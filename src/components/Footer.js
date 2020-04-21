import React from 'react';
import Container from 'react-bootstrap/Container';


function Footer() {

    return (
        <footer className="mt-5 footers">
            <Container fluid={true}>
                <div className='footer-text border-top'>
                    <p>© 2020 YesBee  <i className="fab fa-forumbee"></i></p>
                </div>

            </Container>
        </footer>
    );

}

export default Footer;