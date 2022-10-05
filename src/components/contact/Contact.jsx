import React from 'react'
import { AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { BsInstagram,BsLinkedin } from "react-icons/bs";
import Header from '../header/Header';
import './style/contact.css'

function Contact() {
  return (
    <>
      <Header/>
      {/* start contact */}
      <section className="contact-page">
        <h1>CONTACT US</h1>
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
            <p>Cairo | The Third District</p>
            <p>Red Sea | Hurghada</p>
          </div>
      </section>
      {/* end contact */}
    </>
  )
}

export default Contact