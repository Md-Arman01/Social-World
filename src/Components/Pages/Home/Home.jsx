
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import Teachers from "./Teachars/Teachers";
import YogaReasons from "./YogaReasons/YogaReasons";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <YogaReasons></YogaReasons>
            <Services></Services>
            <Teachers></Teachers>
            <Footer></Footer>
        </div>
    );
};

export default Home;