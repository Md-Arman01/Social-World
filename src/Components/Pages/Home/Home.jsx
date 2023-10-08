import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import Teachers from "./Manager/Manager";
import EventManagement from "./EventManagement/EvenManagement";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <EventManagement></EventManagement>
      <Services></Services>
      <Teachers></Teachers>
      <Footer></Footer>
    </div>
  );
};

export default Home;
