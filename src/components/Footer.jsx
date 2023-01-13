import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <div className='footer-container'>
        <a href="https://twitter.com/Tarik__uslu" target={'_blank'}><FontAwesomeIcon className='footer-icon' icon={faTwitterSquare} size='3x' color='#918E9B'/></a>
        <a href="https://github.com/tarikuslu" target={'_blank'}><FontAwesomeIcon className='footer-icon' icon={faGithubSquare} size='3x' color='#918E9B'/></a>
        <a href="https://www.instagram.com/tariikusluu/" target={'_blank'}><FontAwesomeIcon className='footer-icon' icon={faInstagramSquare} size='3x' color='#918E9B'/></a>
    </div>
  )
}
