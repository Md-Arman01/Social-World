import Marquee from "react-fast-marquee";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  return (
    <div className="my-20">
      <div>
      <h1 className="text-center font-medium text-5xl text-[#45445A] mb-5">
      Our Teachers
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
      <p className="text-[#97245F] text-lg text-center mb-10">Best Yoga Teachers are Here for You</p>
    </div>
      <Marquee className="gap-5" pauseOnHover={true}>
        <TeacherCard></TeacherCard>
      </Marquee>
    </div>
  );
};

export default Teachers;
