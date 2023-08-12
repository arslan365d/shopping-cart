import React, { useEffect, useState } from 'react'
import "./products.css"
import data from "../../data/data"
import { useDispatch } from 'react-redux'
import { add } from '../../store/cartSlice'
import Navbar from "../../components/navbar/Navbar" 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/footer/Footer'

const Products = () => {
  const itemdata = data;
  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(itemdata)
  }, [])

  console.log(productData);

  function handleAdd(item) {
    dispatch(add(item))
  }
  const notify = () => toast("Product is Added!");
  return (
    <>
    <Navbar />
      <div className="products-container">
        {
          productData.map(product => (
            <div className="product-card">
              <img src={product.imgUrl} alt="" />
              <h3>{product.title}</h3>
              <h5>{product.price}</h5>
              <button onClick={() =>{ handleAdd(product); notify(); }}>Add to Cart</button>
            </div>
          ))
        }
      </div>
      <Footer />
      <ToastContainer autoClose={2000}/>
    </>
  )
}

export default Products
