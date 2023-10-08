import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard/ServicesCard";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((res) => setServicesData(res));
  }, []);

  return (
    <>
      <div className="my-7 lg:my-20">
        <div
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false">
          <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-[#45445A] lg:mb-5">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
              Services
            </span>
          </h1>
          <div className="flex items-center gap-2 justify-center">
            <div>
              <hr className="w-[100px] md:w-[200px] lg:w-[400px]" />
            </div>
            <img
              className=""
              src="https://i.ibb.co/5cMVVjk/icons8-lotus-48-1.png"
              alt=""
            />
            <div>
              <hr className="w-[100px] md:w-[200px] lg:w-[400px]" />
            </div>
          </div>
          <p className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-sm md:text-base lg:text-lg text-center">
            Choose Your Event and Focus
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-5 my-5 md:my-10 px-4 lg:px-0">
          {servicesData?.map((services) => (
            <ServicesCard key={services.id} services={services}></ServicesCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
