import React from 'react'
import img from "../../assets/error.jpg"
import "./errorPage.css"
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
    <div className='error-container'>
      <img src={img} alt="" className='error-img' />
      <button className='error-button'><Link to="/" className='link'>Back to Home</Link></button>
    </div>
      </>
  )
}

export default Error

