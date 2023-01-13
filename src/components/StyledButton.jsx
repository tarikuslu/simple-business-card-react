import React from 'react'

export default function StyledButton({title, icon, bgColor, titleColor }) {
  return (
    <button className='social-button' style={{backgroundColor: bgColor, color: titleColor}}>
       {
        title === 'Email' ?
        (
          <a href="mailto:huseyintarku@gmail.com"> {icon} {title} </a>
        ) :
        (
          <a href="https://www.linkedin.com/in/huseyintarikuslu/" target={'_blank'}> {icon} {title} </a>
        )
       }
    </button>
  )
}
