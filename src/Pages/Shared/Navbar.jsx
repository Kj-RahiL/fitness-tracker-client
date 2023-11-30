import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providres/AuthProviders";
import { toast } from "react-toastify";
import avatar from '../../assets/register/icons8-avatar-48.png'

// import useCart from "../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    // const [cart] = useCart()
    // console.log(user)
    const link = <>
        <li><NavLink to="/"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#F4AF00' : '',
                    borderBottom: isActive ? "2px solid #F4AF00" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Home</NavLink>
        </li>
        <li><NavLink to='/gallery'
            style={({ isActive }) => {
                return {
                    color: isActive ? '#F4AF00' : '',
                    borderBottom: isActive ? "2px solid #F4AF00" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Gallery</NavLink>
        </li>
        <li><NavLink to="/trainer"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#F4AF00' : '',
                    borderBottom: isActive ? "2px solid #F4AF00" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Trainer</NavLink>
        </li>
        <li><NavLink to="/classes"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#F4AF00' : '',
                    borderBottom: isActive ? "2px solid #F4AF00" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Classes</NavLink>
        </li>
        <li><NavLink to="/dashboard"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#F4AF00' : '',
                    borderBottom: isActive ? "2px solid #F4AF00" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Dashboard</NavLink>
        </li>
        <li><NavLink to="/forums"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#F4AF00' : '',
                    borderBottom: isActive ? "2px solid #F4AF00" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Forums</NavLink>
        </li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('logout successfully')
            })
            .catch(error => {
                console.error(error)
                toast.error('LogOut Failed.!!')
            })
    }
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral  border-2 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="text-[#F4AF00] uppercase font-extrabold tracking-wider text-2xl ">FIT<span className="text-white">TO</span>HIT </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-base">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div className="dropdown dropdown-end flex">
                            <label tabIndex={0} className=" rounded-btn btn-ghost flex">
                            <h2 className="text-base font-light px-4 py-1 hover:bg-[#F4AF00] mr-2 rounded">{user?.displayName} </h2>
                                <img className="w-8 rounded-full " src={user?.photoURL ? user?.photoURL : avatar} alt="" />
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-4 shadow border-2 text-white bg-blend-overlay rounded-box mt-4">
                                <li><button onClick={handleLogout} className="btn btn-ghost hover:bg-[#F4AF00] normal-case font-semibold">SignOut</button></li>
                            </ul>
                        </div> :

                        <Link to='/login' className="btn px-5  rounded-2xl bg-[#F4AF00] text-white">Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;