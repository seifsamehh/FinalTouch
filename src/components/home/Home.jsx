import React from "react";
import { Scrollchor } from 'react-scrollchor';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../images/work.jpg'
import residntalBg from '../../images/residntal-bg.jpg'
import comBg from '../../images/com-bg.jpg'
import hotelBg from '../../images/hotel-bg.jpg'
import adminBg from '../../images/admin-bg.jpg'
import landBg from '../../images/land-bg.jpg'
import furnBg from '../../images/furn-bg.jpg'
import scroll from '../../images/scroll-down.gif'
import Tilt from 'react-tilt'
import { Animator, ScrollContainer, ScrollPage, Move} from "react-scroll-motion";
import {Link} from 'react-router-dom'
import { AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { BsInstagram,BsLinkedin,BsFillArrowUpSquareFill } from "react-icons/bs";
import Header from "../header/Header";
import './style/home.css'

function Home() {
  return (
    <>
    <Header/>
    <ScrollContainer>
      <ScrollPage>
        {/* start home */}
        <section className='home' id="home">
          <Animator animation={Move(0,-200,0,200)}>
            <div className="box">
              <div className="title">
                  <span className="block"></span>
                  <h1 data-scroll>Final Touch<span></span></h1>
              </div>
              <div className="role">
                  <div className="block"></div>
                  <p>Interior Design & Finishing</p>
              </div>
            </div>
          </Animator>
        </section>
        <Scrollchor to="#about">
        <div className="icon">
          <img src={scroll} alt="scroll down" />
        </div>
        </Scrollchor>
        {/* end home */}
      </ScrollPage>
      <ScrollPage>
      {/* start about */}
      <section className="about" id="about">
        <Container>
          <Row>
            <Col lg={6} className="about-content">
              <h1>ABOUT US</h1>
              <p>The Final Touch team is honored to serve you in all fields<br/><span>Architectural design</span><br/><span>Interior Design</span><br/><span>Landscape</span><br/><span>Furniture</span><br/>With superior quality through a team of engineers and technicians whose experience exceeds thirty years in the previous fields from the beginning of 1996 until now, and we are happy to serve you with work extended to all governorates of Egypt and the Arab countries, and we also have the capabilities to manufacture all foundation works with the latest technologies.</p>
            </Col>
            <Col lg={6} className="about-img">
              <Animator animation={Move(0,-500,0,100)}>
                <Tilt options={{ scale : 1 }}>
                    <img src={aboutImage} alt="about" loading="lazy" />
                </Tilt>
              </Animator>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end about */}
      </ScrollPage>
      {/* start work */}
      <section className="work">
        <Container className="container">
          <h1>OUR WORK</h1>
          <Row className="row">
            <Col lg={12} className="categories">
              <div className="part-1">
                {/* first category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img src={residntalBg} alt="residental bg" loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/Residential">
                      <button data-text="Awesome" className="button">
                        <span className="actual-text">&nbsp;Residential&nbsp;</span>
                        <span className="hover-text" aria-hidden="true">&nbsp;Residential&nbsp;</span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* second category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img className="book-design-image" src={comBg} alt="com bg" loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/Commercial">
                      <button data-text="Awesome" className="button">
                          <span className="actual-text">&nbsp;Commercial&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;Commercial&nbsp;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="part-2">
                {/* third category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img className="book-design-image" src={hotelBg} alt="hotel bg" loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/Hotel">
                      <button data-text="Awesome" className="button">
                          <span className="actual-text">&nbsp;Hotel&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;Hotel&nbsp;</span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* fourth category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img className="book-design-image" src={adminBg} alt="admin bg" loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/Administrative">
                      <button data-text="Awesome" className="button special">
                          <span className="actual-text">&nbsp;Administrative&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;Administrative&nbsp;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="part-3">
                {/* fifth category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img className="book-design-image" src={landBg} alt="land bg" loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/Landscape">
                      <button data-text="Awesome" className="button">
                          <span className="actual-text">&nbsp;Landscape&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;Landscape&nbsp;</span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* six category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img className="book-design-image" src={furnBg} alt="furn bg" loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/Furniture">
                      <button data-text="Awesome" className="button">
                          <span className="actual-text">&nbsp;Furniture&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;Furniture&nbsp;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end work */}
      {/* start contact */}
      <section className="contact">
        <h1>CONTACT US</h1>
          <div className="icons-box">
            {/* icons */}
            <ul>
              <li className="facebook-box">
                <a href="https://www.facebook.com/profile.php?id=100084477558883" target="_blank" title="Facebook"><AiOutlineFacebook/></a>
              </li>
              <li className="instgram-box">
                <a href="https://www.instagram.com/hfinaltouch2022/" target="_blank" title="instgram"><BsInstagram/></a>
              </li>
              <li className="linkedin-box">
                <a href="https://www.linkedin.com/in/final-touch-8b8209249/" target="_blank" title="linkedin"><BsLinkedin/></a>
              </li>
              <li className="gmail-box">
                <a href="mailto: finaltouch960@gmail.com" target="_blank" title="Gmail"><AiOutlineMail/></a>
              </li>
              <li className="whatsapp-box">
                <a href="https://wa.me/+201200938262" target="_blank" title="Whatsapp"><AiOutlineWhatsApp/></a>
              </li>
            </ul>
          </div>
          <div className="locations">
            <p>Cairo | The Third District</p>
            <p>Red Sea | Hurghada</p>
          </div>
      </section>
      {/* end contact */}
      {/* start footer */}
      <footer>
        <p>All right reserved &copy; <span>Final Touch</span></p>
        <div className="box">
          <p className="special">By     
            <a href="https://seif-sameh.vercel.app/" target="_blank" className="seif">
            Seif Sameh
            <svg viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
            </a>
          </p>
          <Scrollchor to="#home" className="scroll">
            <BsFillArrowUpSquareFill/>
          </Scrollchor>
        </div>
      </footer>
      {/* end footer */}
      </ScrollContainer>
    </>
  )
}

export default Home