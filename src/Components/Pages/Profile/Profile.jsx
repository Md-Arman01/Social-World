import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthContextProvider";
import Footer from "../Home/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { photoURL, displayName, email } = user || {};
  return (
    <>
    <div className="overflow-x-hidden my-7 md:my-12 container mx-auto">
      <div className="flex justify-center lg:justify-start mb-2">
        <div className="text-center lg:text-left">
      <h1 className="text-sm text-[#858EA8] font-semibold ">OVERVIEW</h1>
      <h1 className="text-3xl text-[#3D506E] font-bold">User Profile</h1>
        </div>
      </div>
      {/* card container  */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 px-4 lg:px-0 mb-5 lg:mb-0">
        {/* Profile Card */}
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          
          
          
          className="card lg:w-96 bg-base-100 border shadow-md h-fit">
          <img
            src={photoURL}
            alt="Shoes"
            className="w-44 h-44 rounded-full mx-auto mt-6 object-cover"
          />
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-semibold ">{displayName}</h2>
            <p className="text-base font-semibold text-gray-500">{email}</p>
            <div className="border-y-2 w-full py-2 my-5">
              <div className="flex justify-between  items-center">
                <h1 className="text-lg text-left font-semibold text-gray-600">
                  Profile Complete
                </h1>
                <h1>74%</h1>
              </div>
              <progress
                className="progress progress-accent w-full"
                value="74"
                max="100"></progress>
            </div>
          </div>
        </div>
        {/* update card */}
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          
          
          
          className="card flex-1 bg-base-100 border shadow-md p-4">
          <h1 className="text-[#3D506E] text-lg font-semibold mb-3">
            Update Profile
          </h1>
          <hr />
          <div className="grid grid-cols-2 gap-5 my-5">
            <div>
              <h1 className="text-base text-gray-500 mb-2">Email</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="text-base text-gray-500 mb-2">Username</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="text-base text-gray-500 mb-2">First Name</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="text-base text-gray-500 mb-2">Last Name</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <h1 className="text-base text-gray-500 mb-2">Address</h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />

          <div className="grid grid-cols-4 gap-5 my-5">
            <div className="col-span-2">
              <h1 className="text-base text-gray-500 mb-2">City</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="text-base text-gray-500 mb-2">Stete</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="text-base text-gray-500 mb-2">Zip</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <h1 className="text-base text-gray-500 mb-2">Description</h1>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"></textarea>
          <button className="w-40 mt-4  mx-auto normal-case block select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-3 px-6 text-center align-middle font-sans text-sm font-bold  text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Update Acount
          </button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Profile;
