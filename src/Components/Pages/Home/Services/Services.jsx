import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {

  const [servicesData, setServicesData]  = useState([])
  useEffect(()=> {
    fetch('services.json')
    .then(res => res.json())
    .then(res => setServicesData(res))
  },[])


  return (
    <>
    <div className="my-20">

    <div>
      <h1 className="text-center font-medium text-5xl text-[#45445A] mb-5">
      Our <span className="text-[#97245F]">Services</span> 
      </h1>
      <div className="flex items-center gap-2 justify-center">
        <div>
        <hr className="w-[400px]" />
        </div>
        <img  className="" src="https://i.ibb.co/TvwsVqV/icons8-lotus-48.png" alt="" />
        <div>
        <hr className="w-[400px]" />
        </div>
      </div>
      <p className="text-[#97245F] text-lg text-center">Choose Your Event and Focus</p>
    </div>
    <div className="grid grid-cols-2 container mx-auto gap-5 my-10">
      {
        servicesData?.map(services => <ServicesCard key={services.id} services={services}></ServicesCard>)
      }
      
    </div>
    </div>
    </>
  );
};

export default Services;
