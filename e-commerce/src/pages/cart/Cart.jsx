import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/footer/Footer'


const Cart = () => {

  const dispatch = useDispatch();
  function handleRemove(item) {
    dispatch(remove(item))
  }
  const cartItems = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce((total, item) => (total + item.price), 0)
  const notify = () => toast("Product is Removed!");
  return (
    <>
      <Navbar />
      <div className="cart-container">
        {
          cartItems.map(items => (
            <div className="cart-card">
              <img src={items.imgUrl} alt="" />
              <h4>{items.title}</h4>
              <h5>{items.price}</h5>
              <button onClick={() => { handleRemove(items.id); notify(); }}>Remove</button>
            </div>
          ))
        }
        <hr className='cart-line' />
        <div className="total-price">
          <h4>Total Price</h4>
          <h5>${totalPrice}</h5>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default Cart
