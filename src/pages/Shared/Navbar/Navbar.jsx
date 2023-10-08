import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks =
        <>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/register">REGISTER</NavLink>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/shop">CUSTOMERS</NavLink>
        </>



    return (
        <nav className="navbar bg-base-100 md:h-[105px]">
            <div className="navbar-start lg:w-[0] xl:w-[28%]">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;