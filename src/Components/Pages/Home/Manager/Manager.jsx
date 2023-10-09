import Marquee from "react-fast-marquee";
import ManagerCard from "./ManagerCard";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Manager = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      className="lg:my-20">
      <div>
        <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-[#45445A] mb-5">
          Our Team{" "}
          <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
            Manager
          </span>
        </h1>
        <div className="flex items-center gap-2 justify-center">
          <div>
            <hr className="w-[130px] md:w-[200px] lg:w-[400px]" />
          </div>
          <img src="https://i.ibb.co/sQ4GyS6/icons8-people-50.png" alt="" />
          <div>
            <hr className="w-[130px] md:w-[200px] lg:w-[400px]" />
          </div>
        </div>
        <p className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-sm md:text-base lg:text-lg text-center mb-10">
          Best Manager Are Here For You
        </p>
      </div>
      <Marquee className="gap-5 mb-10 lg:mb-0" pauseOnHover={true}>
        <ManagerCard></ManagerCard>
      </Marquee>
    </div>
  );
};

export default Manager;
