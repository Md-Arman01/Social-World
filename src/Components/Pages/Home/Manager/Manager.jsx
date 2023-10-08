import Marquee from "react-fast-marquee";
import TeacherCard from "./ManagerCard";

const Teachers = () => {
  return (
    <div className="my-20">
      <div>
      <h1 className="text-center font-medium text-5xl text-[#45445A] mb-5">
      Our Team <span className="text-[#97245F]">Manager</span>
      </h1>
      <div className="flex items-center gap-2 justify-center">
        <div>
        <hr className="w-[400px]" />
        </div>
        <img  src="https://i.ibb.co/sQ4GyS6/icons8-people-50.png" alt="" />
        <div>
        <hr className="w-[400px]" />
        </div>
      </div>
      <p className="text-[#97245F] text-lg text-center mb-10">Best Manager Are Here For You</p>
    </div>
      <Marquee className="gap-5" pauseOnHover={true}>
        <TeacherCard></TeacherCard>
      </Marquee>
    </div>
  );
};

export default Teachers;
