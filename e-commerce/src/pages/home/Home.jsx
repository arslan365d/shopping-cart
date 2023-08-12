import React from 'react'
import HomeNav from '../../components/homeNav/HomeNav'
import "./home.css"
import aboutImg from "../../assets/aboutImg.jpg"
import Footer from '../../components/footer/Footer'
import Slider from "../../components/Slider/Slider"

const Home = () => {
  return (
    <>
      <HomeNav />
      {/* home Slider */}
      <section>
      <Slider />
      </section>

      {/* About Section */}
      <section>
        <div className="about-container">
          <div className="about-left">
            <h3>Arslan<span className='text-blue'>Baba</span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat voluptate laudantium sapiente assumenda dolores similique odio harum nostrum et est, deleniti recusandae delectus quam voluptas optio deserunt magni, provident ut. Officiis, ab corporis? Excepturi voluptatum nisi molestiae soluta unde nihil praesentium impedit repellat vel. Incidunt illo perferendis illum dolorum.</p>
            <button>Learn More</button>
          </div>
          <div className="about-right">
            <img src={aboutImg} alt=""/>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
     
    </>
  )
}

export default Home
