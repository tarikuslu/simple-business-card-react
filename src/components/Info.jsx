import React from 'react'
import Photo from './Photo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StyledButton from './StyledButton'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Info() {
  return (
    <div>
        <Photo/>
        <div className="row row-info">
        <h1>Huseyin Tarik Uslu</h1>
        <p>Software Developer</p>
        <small><a href="https://tarikuslu.dev" target={'_blank'}>tarikuslu.dev</a></small>
        <div className="button-container">
        <div className="btn1">
        <StyledButton title='Email' icon={<FontAwesomeIcon icon= {faEnvelope}/>} bgColor='#fff' titleColor={'#374151'}/>
        </div>
        <div className="btn2">
        <StyledButton title='Linkedin' icon={<FontAwesomeIcon icon={faLinkedin}/> } bgColor='#5093E2' titleColor={'#fff'}/>
        </div>
        </div>
        </div>
    </div>
  )
}
