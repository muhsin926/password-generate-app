import React from 'react'
import './button.css'

const Button = ({styles, title, onClick}) => {
  return (
    <button className='button' onClick={onClick} style={styles}>{title}</button>
  )
}

export default Button