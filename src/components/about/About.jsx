import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../images/work.jpg'
import Slide from 'react-reveal/Slide';
import Tilt from 'react-tilt'
import './style/about.css'
import Header from '../header/Header';

function About() {
  return (
    <>
    <Header/>
      {/* start about */}
      <section className="about-page">
        <Container>
          <Row>
            <Col lg={6} className="about-content">
              <h1>ABOUT US</h1>
                <Slide bottom cascade>
                  <p>The Final Touch team is honored to serve you in all fields<br/><span>Architectural design</span><br/><span>Interior Design</span><br/><span>Landscape</span><br/><span>Furniture</span><br/>With superior quality through a team of engineers and technicians whose experience exceeds thirty years in the previous fields from the beginning of 1996 until now, and we are happy to serve you with work extended to all governorates of Egypt and the Arab countries, and we also have the capabilities to manufacture all foundation works with the latest technologies.</p>
                </Slide>
            </Col>
            <Col lg={6} className="about-img">
              <Tilt options={{ scale : 1 }}>
                  <img src={aboutImage} alt="about" loading='lazy' />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end about */}
    </>
  )
}

export default About