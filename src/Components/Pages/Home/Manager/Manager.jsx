import Marquee from "react-fast-marquee";
import TeacherCard from "./ManagerCard";

const Teachers = () => {
  return (
    <div className="my-20">
      <div>
      <h1 className="text-center font-semibold text-5xl text-[#45445A] mb-5">
      Our Team <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Manager</span>
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
      <p className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg text-center mb-10">Best Manager Are Here For You</p>
    </div>
      <Marquee className="gap-5" pauseOnHover={true}>
        <TeacherCard></TeacherCard>
      </Marquee>
    </div>
  );
};

export default Teachers;
