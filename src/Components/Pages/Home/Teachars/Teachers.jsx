import Marquee from "react-fast-marquee";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  return (
    <div className="my-20">
      <Marquee className="gap-5" pauseOnHover={true}>
        <TeacherCard></TeacherCard>
      </Marquee>
    </div>
  );
};

export default Teachers;
