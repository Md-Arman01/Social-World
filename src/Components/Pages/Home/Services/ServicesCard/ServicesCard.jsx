import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServicesCard = ({ services }) => {
  const {id, image, name, price, description } = services || {};
  return (
    <div className="">
     <div className="relative flex flex-row h-[350px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/4 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h4 className="mb-2 block font-sans text-2xl font-semibold text-pink-700 leading-snug tracking-normal text-blue-gray-900 antialiased">
    {name}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-500 antialiased h-48">
      {description.slice(0,250)}
    </p>
    <div className="flex items-center justify-between">
      <p className="text-lg text-[#97245F] font-medium">$ {price}</p>

      <Link to={`/details/${id}`}>
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-700 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        More Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
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
