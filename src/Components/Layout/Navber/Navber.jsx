import { Link } from "react-router-dom";
import userLogo from '../../../assets/user.png'
import logo from "../../../../public/images/Logo.png";
import Menu from "./Menu";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthContextProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Navber = () => {
  const menuItems = <Menu></Menu>;
  const {user, logoutUser} = useContext(AuthContext)

  const handleLogout =()=> {
    logoutUser()
    .then(() => {
      console.log('successful logout')
    }).catch((error) => {
      console.log(error.message)
    });
  }

  return (
    <div>
      <nav className="inset-0 z-10 block h-max w-full max-w-full rounded-none border  bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex  items-center">
          <div className="flex w-full justify-between items-center">
          <div>
            <img className="w-28" src={logo} alt="" />
          </div>
          <div> 
          <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
            {menuItems}
          </ul>
          </div>
          <div className="flex items-center gap-5">
            
            <h1 className="text-black text-lg font-medium bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">{user && user.displayName}</h1>
            
            <img className="w-12 h-12 object-cover rounded-full" src={user ? user.photoURL : userLogo} alt="" />
            {
              user ? <button
              onClick={handleLogout}
              className="block select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-3 px-5 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true">
              Login out
            </button>
            :
            <Link to='/login'>
              <button
                className="block  select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-3 px-10 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true">
                Login
              </button>
            </Link>
            }
          </div>

          </div>
          <button
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            data-collapse-target="sticky-navar">
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
          </button>
        </div>
        <div
          className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
          data-collapse="sticky-navar">
          <ul className="mt-2 mb-4 flex flex-col gap-2 pb-2">
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Pages
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Account
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Blocks
              </a>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Docs
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
