import React from 'react'
import './button.css'

const Button = ({styles, title}) => {
  return (
    <button className='button' style={styles}>{title}</button>
  )
}

export default Button