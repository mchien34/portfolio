import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const contactArr = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
        .sendForm(
            'default_service',
            'template_woon4d6',
            refForm.current,
            'cXMm1mu4iw4cP5f5F'
        )
        .then(
            ()=>{
                alert('Message successfullly sent!')
                window.location.reload(false)
            },
            ()=>{
                alert('Fail to send message, please try again')

            }
        )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={contactArr}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>I am really interested in Frontend Development. Therefore, if you have other request or question,
            don't hesitate to contact me using below form either. </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name "
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email "
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li className="">
                  <textarea placeholder="Message" name="message"></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Nguyen Minh Chien,
          <br />
          Vietnam,
          <br />
          497 Hoa Hao, Dict 10 <br />
          Ho Chi Minh City <br />
          <span>chienindustries@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[10.760372, 106.6622208]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[10.760372, 106.6622208]}>
              <Popup>Chien lives here !</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
