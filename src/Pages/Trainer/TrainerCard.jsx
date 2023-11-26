import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrainerCard = ({ item }) => {
    const { name, category, image, availableTimeSlot, experienceYears } = item
    return (
        <div className="card w-full bg-black text-white shadow-md shadow-amber-500">
            <figure className="h-[300px]"><img className="h-full w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body space-y-2">
                <div className="flex justify-between items-center">
                    <h2 className="card-title text-gray-300">{name}</h2>
                    <div className='flex text-2xl mt-5'>
                        <Link to={item.socialIcons.facebook}><FaFacebook className='text-blue-500 bg-white rounded-full'></FaFacebook></Link>
                        <FaTwitter className='text-blue-500 ml-5'></FaTwitter>
                    </div>
                </div>
                <div className="text-gray-400">
                    <p className="text-lg">Experience: {experienceYears}</p>
                    <h3>Available: {availableTimeSlot}</h3>
                </div>
                <h2 className="card-title text-xl">{category}</h2>

                <button className="btn px-4 w-full bg-amber-500 text-white mt-10">Know More</button>

            </div>
        </div>
    );
};

export default TrainerCard;