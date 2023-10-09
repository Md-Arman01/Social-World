import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import Manager from "./Manager/Manager";
import EventManagement from "./EventManagement/EvenManagement";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Slider></Slider>
      <EventManagement></EventManagement>
      <Services></Services>
      <Manager></Manager>
      <Footer></Footer>
    </div>
  );
};

export default Home;
