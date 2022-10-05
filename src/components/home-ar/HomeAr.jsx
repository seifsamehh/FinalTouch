import React from 'react'
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
import HeaderAr from '../header-ar/HeaderAr'
import './style/homeAr.css'

function HomeAr() {
  return (
    <>
    <HeaderAr/>
    <ScrollContainer>
      <ScrollPage>
        {/* start home ar */}
        <section className='home-ar' id='home-ar'>
          <Animator animation={Move(0,-200,0,200)}>
            <div className="box">
              <div className="title">
                  <span className="block"></span>
                  <h1>Final Touch<span></span></h1>
              </div>
              <div className="role">
                  <div className="block"></div>
                  <p>Interior Design & Finishing</p>
              </div>
            </div>
          </Animator>
        </section>
        <Scrollchor to="#aboutAr">
          <div className="icon">
            <img src={scroll} alt="scroll down" />
          </div>
        </Scrollchor>
        {/* end home-ar */}
      </ScrollPage>
      <ScrollPage>
        {/* start about-ar */}
        <section className="about-ar" id='aboutAr'>
          <Container>
            <Row className='row'>
                <Col lg={6} className="about-img">
                  <Animator animation={Move(0,-500,0,100)}>
                    <Tilt options={{ scale : 1 }}>
                      <img src={aboutImage} alt="about" loading='lazy' />
                    </Tilt>
                  </Animator>
                </Col>
              <Col lg={6} className="about-content">
                <h1>خدماتنا</h1>
                <p>يتشرف فريق عمل فينال تاتش بخدمتكم فى المجالات <br/><span>تصميم معمارى</span><br/><span>التصميم الداخلى</span><br/><span>لاند سكيب</span><br/><span>الأثاث</span><br/>مع فائق من الجودة من خلال فريق عمل مهندسيين و فنينين تفوق خبراتهم الثلاثون عاما فى المجالات السابقة من بداية عام 1996 حتى الان و نسعد لخدمتكم بعمل ممتد حتى كافة محافظات مصر و الدول العربية و كما يتوفر لدينا أمكانيات تصنيع جميع أعمال الأثاث بأحدث التقنيات</p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* end about-ar */}
      </ScrollPage>
      {/* start work */}
      <section className="work-ar">
        <Container className="container">
          <div className="work-heading">
            <h1>من أعمالنا</h1>
          </div>
          <Row className="row">
            <Col lg={12} className="categories">
              <div className="part-1">
                {/* first category */}
                <div className="wrapper">
                  <div className="image-wrapper">
                  <img src={residntalBg} alt="residnal bg" loading="lazy" /></div>
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
      {/* start contact */}
      <section className="contact-ar">
        <div className="contact-heading">
          <h1>للتواصل معنا</h1>
        </div>
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
            <p>القاهرة التجمع الثالث</p>
            <p>البحر الاحمر الغردقة</p>
          </div>
      </section>
      {/* end contact */}
      {/* start footer */}
      <footer>
        <p>كل الحقوق ترجع الى <span>فينال تاتش</span></p>
        <div className="box">
          <p className="special">
            <a href="https://seif-sameh.vercel.app/" target="_blank" className="seif">
            سيف سامح
            <svg viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
            </a>
          </p>
          <Scrollchor to="#home-ar" className="scroll">
            <BsFillArrowUpSquareFill/>
          </Scrollchor>
        </div>
      </footer>
      {/* end footer */}
    </ScrollContainer>
    </>
  )
}

export default HomeAr