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
import './style/workAr.css'
import HeaderAr from '../header-ar/HeaderAr';

function WorkAr() {
  return (
    <>
    <HeaderAr/>
      {/* start work */}
      <section className="work-ar-page">
        <Container className="container">
          <h1>من أعمالنا</h1>
          <Row className="row">
            <Col lg={12} className="categories">
            <div className="part-1">
                {/* first category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img src={residntalBg} loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/ResidentialAr">
                      <button data-text="Awesome" className="button">
                        <span className="actual-text">&nbsp;سكنى&nbsp;</span>
                        <span className="hover-text" aria-hidden="true">&nbsp;سكنى&nbsp;</span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* second category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img className="book-design-image" src={comBg} alt="com bg" loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/CommercialAr">
                      <button data-text="Awesome" className="button">
                          <span className="actual-text">&nbsp;تجارى&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;تجارى&nbsp;</span>
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
                    <Link to="/HotelAr">
                      <button data-text="Awesome" className="button">
                          <span className="actual-text">&nbsp;فندقى&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;فندقى&nbsp;</span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* fourth category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img className="book-design-image" src={adminBg} alt="admin bg" loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/AdministrativeAr">
                      <button data-text="Awesome" className="button">
                          <span className="actual-text">&nbsp;ادراى&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;ادارى&nbsp;</span>
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
                    <Link to="/LandscapeAr">
                      <button data-text="Awesome" className="button">
                          <span className="actual-text">&nbsp;لاند&nbsp;سكيب&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;لاند&nbsp;سكيب&nbsp;</span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* six category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img className="book-design-image" src={furnBg} alt="furn bg" loading="lazy" /></div>
                  <div className="header-wrapper">
                    <Link to="/FurnitureAr">
                      <button data-text="Awesome" className="button">
                          <span className="actual-text">&nbsp;أثاث&nbsp;</span>
                          <span className="hover-text" aria-hidden="true">&nbsp;أثاث&nbsp;</span>
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

export default WorkAr