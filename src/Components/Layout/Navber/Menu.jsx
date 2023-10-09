import { NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <div className="flex items-center gap-3 md:gap-5">
            <NavLink to='/' className={({ isActive,}) => isActive ? "bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg" : "text-lg text-gray-400 hover:text-[#FF4804]"}>Home</NavLink>
            <p className="border h-7 md:h-9"></p>
            <NavLink to='/features'className={({ isActive,}) => isActive ? "bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg" : "text-lg text-gray-400 hover:text-[#FF4804]"}>About Us</NavLink>
            <p className="border h-7 md:h-9"></p>
            <NavLink to='/profile' className={({ isActive,}) => isActive ? "bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg" : "text-lg text-gray-400 hover:text-[#FF4804]"}>Profile</NavLink>
            <p className="border h-7 md:h-9"></p>
            <NavLink to='/classes' className={({ isActive,}) => isActive ? "bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg" : "text-lg text-gray-400 hover:text-[#FF4804]"}>Contact</NavLink>
        </div>
    );
};

export default Menu;