import React from 'react'
import { AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { BsTelephone,BsInstagram,BsLinkedin } from "react-icons/bs";
import HeaderAr from '../header-ar/HeaderAr';
import './style/contactAr.css'

function ContactAr() {
  return (
    <>
    <HeaderAr/>
    {/* start contact */}
    <section className="contact-ar-page">
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
                <a href="https://www.instagram.com/samehfinaltouch/" target="_blank" title="instgram"><BsInstagram/></a>
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
    </>
  )
}

export default ContactAr