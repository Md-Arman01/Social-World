// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import image1 from '../../../../../public/images/img1.jpg'
import image2 from '../../../../../public/images/img2.jpg'
import image3 from '../../../../../public/images/img3.jpg'
import image4 from '../../../../../public/images/img4.jpg'

const Slider = () => {
    return (
        <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} />
        </SwiperSlide>
      </Swiper>
      
    </>
    );
};

export default Slider;