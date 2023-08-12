
import {BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Cart from './pages/cart/Cart'
import ErrorPage from "./pages/errorPage/ErrorPage"


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
