import { useLoaderData, useNavigate, useParams } from "react-router-dom";

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
    <div className="container mx-auto mt-28">
      <div className="flex gap-5 rounded-lg bg-base-100 shadow-xl ">
        <img className="w-[700px] h-[600px] object-cover rounded-lg" src={image} alt="" />
        <div className="flex items-center justify-center">
          <div className="space-y-5">
            <h2 className="text-5xl font-semibold">{name}</h2>
            <p className="text-base text-gray-500">{description}</p>
            <div className="card-actions">
            <button onClick={handleBack} className="btn btn-outline btn-secondary normal-case">Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
