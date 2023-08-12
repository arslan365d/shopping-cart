import React from 'react'
import {Link} from "react-router-dom"
import {AiOutlineShopping} from "react-icons/ai"
import "./navbar.css"
import { useSelector } from 'react-redux'

const Navbar = () => {
const items = useSelector(state => state.cart)
  return (
    <section className='bg-nav'>
    <div className='nav-container'>
      <div className="nav-left">
          <h2>Arslan<span className='text-blue'>Baba</span></h2>
      </div>
      <div className="nav-right">
       <ul>
        <li><Link to="/products" className='nav-links'>Products</Link></li>
        <div className="cart-icon">
        <li><Link to="/cart" className='nav-links'><AiOutlineShopping size={45} /></Link></li>
        <span className='cart-num'>{items.length}</span>
        </div>
       </ul>
      </div>
    </div>
    </section>
  )
}

export default Navbar
