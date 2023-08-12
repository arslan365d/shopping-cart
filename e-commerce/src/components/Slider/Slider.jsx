import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';
import Button from './Button/Button';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import slider1 from '../../assets/slider-1.jpg';
import slider2 from '../../assets/slider-2.jpg';
import slider3 from '../../assets/slider-3.jpg';

const Slider = () => {
  const sliderData = [
    {
      imgUrl: slider1,
      title: 'Charge your phone safety',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nunc pretium nisl, euismod.',
      shopUrl: '#',
      productUrl: '#',
    },
    {
      imgUrl:slider2,
      title: 'Get new cover from it',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nunc pretium nisl, euismod.',
      shopUrl: '#',
      productUrl: '#',
    },
    {
      imgUrl: slider3,
      title: 'Get new cover from it',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nunc pretium nisl, euismod.',
      shopUrl: '#',
      productUrl: '#',
    },
  ];
  const navigate = useNavigate();
  const showCurrentSlide = (slides, index) => {
    for (const item of slides) {
      item.classList.remove('show');
    }
    slides[index].classList.add('show');
  };

  const handleCurrentSldier = (e) => {
    const sliderContent = [...e.$el[0].querySelectorAll('.slider-item__content')];
    showCurrentSlide(sliderContent, e.activeIndex);
  };

  return (
    <Swiper
      className='slider'
      modules={[Navigation]}
      spaceBetween={0}
      navigation
      slidesPerView={1}
      onSwiper={handleCurrentSldier}
      onSlideChange={handleCurrentSldier}
    >
      {sliderData.map((slider, i) => (
        <SwiperSlide key={i} style={{ background: `url(${slider.imgUrl})` }} className='slider-item'>
          <div className='slider-item__content'>
            <h2 className='slider-title'>{slider.title}</h2>
            <p className='slider-des'>{slider.description}</p>
            <div className='slider-buttons'>
              <Button onClick={() => navigate('/shop')}>To shop</Button>
              <Button className='secoundry'>Read More</Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
