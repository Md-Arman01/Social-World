import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import Teachers from "./Teachars/Teachers";
import YogaReasons from "./YogaReasons/YogaReasons";

const Home = () => {
    return (
        <div>
            <div className="mt-[125px]">
            <Slider></Slider>
            </div>
            <YogaReasons></YogaReasons>
            <Services></Services>
            <Teachers></Teachers>
            <Footer></Footer>
        </div>
    );
};

export default Home;