import { Link } from "react-router-dom";
import Title from "../../../Components/Shared/Title";
import useAuth from "../../../Hooks/useAuth";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const ProfileSettings = () => {

    const { user } = useAuth()
    // const axiosPublic = useAxiosPublic()
    // axiosPublic.get('/')
    console.log(user)
    return (
        <div>
            <Title title='User Profile'></Title>
            <div className="card w-1/2 mx-auto my-10 pb-5 shadow-md shadow-amber-500">
                <figure className="px-10 pt-10 h-[220px]">
                    <img src={user.photoURL} alt="Shoes" className="rounded-xl h-full avatar" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold">Name: {user.displayName}</h2>
                    <p className="text-base text-gray-400">Email: {user.email}</p>
                </div>
                <Link className="flex justify-center"><button className="btn uppercase bg-amber-600 text-white  btn-outline">update profile</button></Link>
            </div>
        </div>
    );
};

export default ProfileSettings;