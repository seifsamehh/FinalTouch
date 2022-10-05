import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../images/work.jpg'
import Tilt from 'react-tilt'
import HeaderAr from '../header-ar/HeaderAr';
import './style/aboutAr.css'

function AboutAr() {
  return (
    <>
    <HeaderAr/>
    {/* start about-ar */}
    <section className="about-ar-page">
      <Container>
        <Row className='row'>
            <Col lg={6} className="about-img">
                <Tilt options={{ scale : 1 }}>
                    <img src={aboutImage} alt="about" loading='lazy' />
                </Tilt>
            </Col>
          <Col lg={6} className="about-content">
            <h1>خدماتنا</h1>
            <p>يتشرف فريق عمل فينال تاتش بخدمتكم فى المجالات <br/><span>تصميم معمارى</span><br/><span>التصميم الداخلى</span><br/><span>لاند سكيب</span><br/><span>الأثاث</span><br/>مع فائق من الجودة من خلال فريق عمل مهندسيين و فنينين تفوق خبراتهم الثلاثون عاما فى المجالات السابقة من بداية عام 1996 حتى الان و نسعد لخدمتكم بعمل ممتد حتى كافة محافظات مصر و الدول العربية و كما يتوفر لدينا أمكانيات تصنيع جميع أعمال الأثاث بأحدث التقنيات</p>
          </Col>
        </Row>
      </Container>
    </section>
    {/* end about-ar */}
    </>
  )
}

export default AboutAr