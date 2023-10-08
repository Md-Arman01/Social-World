import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
      <div className="flex justify-center">
        <button
          onClick={handleBack}
          className="absolute top-8 btn btn-outline normal-case">
          Go Back
        </button>
      </div>
      <img
        className="lg:w-full h-screen object-contain"
        src="https://i.ibb.co/G0x8FVk/error-Page.png"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
