import Swal from 'sweetalert2';
import bgLogin from '../../assets/Home/mesh-814.png'
import SocialLogIn from '../../Components/Shared/SocialLogIn';
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginAni from '../../assets/register/Animation - 1701011933091.json'
import Lottie from 'lottie-react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    // console.log('state in the location login page', location.state)


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                toast.success('User Login Successful.!!',{
                    position: 'top-center',
                    autoClose: 3000
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                toast.error("Invalid username or password. Please try again.!!")
                form.reset()
            })
    }

    const boxStyle = {
        boxShadow: '10px 10px 10px 10px rgba(244, 175, 0, 0.5)',
    };

    return (
        <div className="hero min-h-screen bg-base-200 bg-cover" style={{ background: `url(${bgLogin})`, backgroundSize: 'cover', }}>
            <div className="hero-content flex-col lg:flex-row m-8 md:m-20" style={{ ...boxStyle, background: `url(${bgLogin})` }}>
                <div className="text-center md:text-left hidden sm:block">
                    <Lottie animationData={loginAni}></Lottie>
                </div>
                <div className=" flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleLogin} className="card-body text-gray-200">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="text-[#F4AF00] label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {/* apply disabled for re captcha */}
                            <button className="btn btn-outline hover:text-[#F4AF00] text-white bg-[#f4a32b] bg-opacity-70">Login</button>
                        </div>
                        <div>
                            <p className='text-[#D1A054] text-center'>New here? Create a <Link to='/signUp' className='text-[#F4AF00] font-semibold'
                            >New Account</Link></p>
                        </div>
                        <div className='text-white divider'>Or</div>
                        <SocialLogIn></SocialLogIn>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;