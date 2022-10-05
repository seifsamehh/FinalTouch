import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import residntalBg from '../../images/residntal-bg.jpg'
import comBg from '../../images/com-bg.jpg'
import hotelBg from '../../images/hotel-bg.jpg'
import adminBg from '../../images/admin-bg.jpg'
import landBg from '../../images/land-bg.jpg'
import furnBg from '../../images/furn-bg.jpg'
import {Link} from 'react-router-dom'
import './style/work.css'
import Header from '../header/Header';

function Work() {
  return (
    <>
    <Header/>
      {/* start work */}
      <section className="work-page">
        <Container className="container">
          <h1>OUR WORK</h1>
          <Row className="row">
            <Col lg={12} className="categories">
              <div className="part-1">
                {/* first category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img src={residntalBg} loading="lazy" /></div>
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
    </>
  )
}

export default Work