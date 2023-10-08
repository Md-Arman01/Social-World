import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/sHDySjM/Pi7-Image-people-enjoying-burnt-orange-wedding.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div 
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
               className="max-w-md">
                <h1 data-aos="fade-up" className="mb-5 text-5xl font-bold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Weddings</h1>
                <p className="mb-5">
                A wedding is a formal ceremony that marks the union of two individuals in marriage. 
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/TwqgC6p/Pi7-Image-colleagues-having-fun-business-event.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
               className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Birthday Parties</h1>
                <p className="mb-5">
                A birthday party is a joyful celebration held to mark the anniversary of a person's birth. 
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/BNSNHzw/Pi7-Image-couples-celebrating-birthday.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
               className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Anniversaries</h1>
                <p className="mb-5">
                An anniversary is a special and meaningful occasion that commemorates a significant event or milestone, such as a wedding, the founding of a company, or the start of a relationship. 
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/grMpv3f/Pi7-Image-beautiful-senior-birthday-party.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
               className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Retirement Parties</h1>
                <p className="mb-5">
                A retirement party is a festive event held to honor an individual who is retiring from their career or professional life after years of dedicated work. 
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
