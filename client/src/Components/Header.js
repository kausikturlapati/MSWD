import React from 'react'
import x from './klef.jpeg'

const Header = () => {
  return (
    <div>
      <h1  style={{ color:'red' }}>
      Welcome to CVMS Project
      </h1>
      <img src={x} alt="Header" style={{ width: '100', height: '100' }} />
    </div>
  )
}

export default Header