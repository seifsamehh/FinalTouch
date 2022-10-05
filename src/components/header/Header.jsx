import React , {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import logo from '../../images/final-touch-2.webp'
import {Link} from 'react-router-dom'
import './style/header.css'

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <header>
        <Container className='container'>
            <Row className='row'>
                <Col className="logo">
                    <Fade left>
                        <img src={logo} alt="final touch logo" />
                    </Fade>
                </Col>
                <Col className="pages">
                    <nav>
                        <Link to="/" className='underline'>Home</Link>
                        <Link to="/about" className='underline'>About Us</Link>
                        <Link to="/work" className='underline'>Work</Link>
                        <Link to="/contact" className='underline'>Contact Us</Link>
                        <Link to="/homeAr" className='underline'>Arabic</Link>
                    </nav>
                </Col>
                {/* media */}
                <Col className="overlay">
                <svg onClick={handleShow} width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8Z" fill="currentColor" /><path d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="currentColor" /><path d="M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H3Z" fill="currentColor" /></svg>
                <Offcanvas show={show} onHide={handleClose} placement='top' scroll='true' backdrop='true'>
                    <Offcanvas.Header closeButton/>
                    <Offcanvas.Body>
                        <nav>
                            <Link to="/" className='underline'>Home</Link>
                            <Link to="/about" className='underline'>About Us</Link>
                            <Link to="/work" className='underline'>Work</Link>
                            <Link to="/contact" className='underline'>Contact Us</Link>
                            <Link to="/homeAr" className='underline'>Arabic</Link>
                        </nav>
                    </Offcanvas.Body>
                </Offcanvas>
                </Col>
            </Row>
        </Container>
    </header>
  )
}

export default Header