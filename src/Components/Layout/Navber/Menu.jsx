import { NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <div className="flex items-center gap-5">
            <NavLink to='/' className={({ isActive,}) => isActive ? "bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg" : "text-lg text-gray-400 hover:text-[#FF4804]"}>Home</NavLink>
            <NavLink to='/features'className={({ isActive,}) => isActive ? "bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg" : "text-lg text-gray-400 hover:text-[#FF4804]"}>About Us</NavLink>
            <NavLink to='/profile' className={({ isActive,}) => isActive ? "bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg" : "text-lg text-gray-400 hover:text-[#FF4804]"}>Profile</NavLink>
            <NavLink to='/classes' className={({ isActive,}) => isActive ? "bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg" : "text-lg text-gray-400 hover:text-[#FF4804]"}>Classes</NavLink>
        </div>
    );
};

export default Menu;