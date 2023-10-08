import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

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
                "url(https://i.ibb.co/2tMF8dd/people-enjoying-burnt-orange-wedding.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Weddings</h1>
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
                "url(https://i.ibb.co/C1zrRNx/colleagues-having-fun-business-event.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Birthday Parties</h1>
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
                "url(https://i.ibb.co/fF5F4Ys/couples-celebrating-birthday.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Anniversaries</h1>
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
                "url(https://i.ibb.co/ykrtYcb/beautiful-senior-birthday-party.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Retirement Parties</h1>
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
