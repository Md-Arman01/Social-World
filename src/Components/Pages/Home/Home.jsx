import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import YogaReasons from "./YogaReasons/YogaReasons";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <YogaReasons></YogaReasons>
            <Services></Services>
        </div>
    );
};

export default Home;