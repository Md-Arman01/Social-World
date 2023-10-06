import { NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <div className="flex items-center gap-5">
            <NavLink to='/' className={({ isActive,}) => isActive ? "text-[#97245F] text-lg underline" : "text-lg text-gray-400 hover:text-[#97245F]"}>Home</NavLink>
            <NavLink to='/features'className={({ isActive,}) => isActive ? "text-[#97245F] text-lg underline" : "text-lg text-gray-400 hover:text-[#97245F]"}>Features</NavLink>
            <NavLink to='/profile' className={({ isActive,}) => isActive ? "text-[#97245F] text-lg underline" : "text-lg text-gray-400 hover:text-[#97245F]"}>Profile</NavLink>
            <NavLink to='/classes' className={({ isActive,}) => isActive ? "text-[#97245F] text-lg underline" : "text-lg text-gray-400 hover:text-[#97245F]"}>Classes</NavLink>
        </div>
    );
};

export default Menu;