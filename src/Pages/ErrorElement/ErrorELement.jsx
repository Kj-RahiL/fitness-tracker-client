import { Link } from "react-router-dom";
import error from '../../../public/error.json'
import Lottie from "lottie-react";
import { FaArrowLeft } from "react-icons/fa";

const ErrorElement = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
            <Lottie animationData={error}></Lottie>
                    <p className="mb-5 font-semibold text-2xl ">Page Not Found</p>
                    <Link to='/'>
                        <button className="btn text-white hover:text-black bg-[#d52424]"><FaArrowLeft></FaArrowLeft>Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;