import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Garrett Love',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        profilePic: 'https://i.ibb.co/LP9Kxct/download.png',
        name: 'Saravanan Sb',
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>

        <Container fluid>

          <Navbar className='main-nav' expand="lg">
            <Navbar.Brand className='text-white'>YesBee   <i className="fab fa-forumbee"></i></Navbar.Brand>
            <Navbar.Toggle className="border-0 bg-light" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-white" to="/">Home</Link>
                <Link className="nav-link text-white" to="/about">About</Link>
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage profilePic={this.state.home.profilePic} name={this.state.home.name} title={this.state.home.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />


        </Container>
      </Router>
    );
  }
}

export default App;
