import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const ServicesCard = ({ services }) => {
  const { id, image, name, price, description } = services || {};
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      >
      <div className="relative flex flex-col md:flex-row md:h-[350px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 p-3 md:p-0 md:w-2/4 shrink-0 overflow-hidden rounded-xl md:rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full rounded-xl md:rounded-none object-cover" />
        </div>
        <div className="p-6">
          <h4 className="mb-2 block font-sans text-2xl font-semibold text-[#FF4804] leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-500 antialiased md:h-48">
            {description.slice(0, 250)}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg text-[#FF4804] font-medium">$ {price}</p>

            <Link to={`/details/${id}`}>
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#FF4804] transition-all hover:bg-[#FF4804]/10 active:bg-[#FF4804]/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                More Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  services: PropTypes.object.isRequired,
};

export default ServicesCard;
