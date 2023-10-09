import { Link } from "react-router-dom";
import userLogo from "../../../assets/user.png";
import logo from "../../../../public/images/Logo.png";
import Menu from "./Menu";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthContextProvider";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Navber = () => {
  const menuItems = <Menu></Menu>;
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("successful logout");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <nav className=" block h-max w-full max-w-full rounded-none bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex  items-center">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center space-y-4 lg:space-y-0 my-5 lg:my-0">
            <div>
              <img className="w-28" src={logo} alt="" />
            </div>
            <div>
              <ul className="items-center gap-6 lg:flex">
                {menuItems}
              </ul>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
              <div className="flex flex-col-reverse md:flex-row items-center gap-1 md:gap-5">
              <h1 className="text-black text-lg font-medium bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
                {user && user.displayName}
              </h1>

              <img
                className="w-12 h-12 object-cover rounded-full"
                src={user ? user.photoURL : userLogo}
                alt=""
              />
              </div>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="block select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-3 px-5 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true">
                  Login out
                </button>
              ) : (
                <Link to="/login">
                  <button
                    className="block  select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-3 px-10 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navber;
