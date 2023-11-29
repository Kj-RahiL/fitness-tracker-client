import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";


const SocialLogIn = () => {
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/');
                    })
            })
    }

    return (
        <div className='mb-2'>
            <button onClick={handleGoogleLogIn} className='btn btn-outline w-full text-[#F4AF00]' >
                <FaGoogle></FaGoogle> Google
            </button>
        </div>
    );
};

export default SocialLogIn;