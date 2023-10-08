import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const CardDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const singleCard = allData.find((data) => data.id === idInt);
  const { image, name, description } = singleCard || {};

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto lg:mt-28">
      <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="lg:flex gap-5 rounded-lg bg-base-100 shadow-xl px-4 lg:px-0">
        <img
          className="lg:w-[700px] lg:h-[600px] my-5 lg:my-0 mx-auto object-cover rounded-xl md:rounded-lg"
          src={image}
          alt=""
        />
        <div className="flex items-center justify-center">
          <div className="space-y-2 md:space-y-5 px-1 lg:px-5 mt-2 lg:mt-0 mb-6 lg:mb-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
              {name}
            </h2>
            <p className="text-base text-gray-500">{description}</p>
            <div className="card-actions">
              <button
                onClick={handleBack}
                className="normal-case block select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
