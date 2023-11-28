import { FaEye, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const AppliedTrainerTab = ({beTrainer, index, handleConfirm, handleDelete}) => {

    return (
        <tr key={beTrainer._id}>
            <th>{index + 1}</th>
            <td>{beTrainer.name}</td>
            <td>{beTrainer.email}</td>
            <td>{beTrainer.category}</td>
            <td>
                {/* updated button and click showing modal */}
                <button className="btn btn-outline border-[#4e002d] hover:bg-amber-700" onClick={() => document.getElementById(beTrainer._id).showModal()}><FaEye></FaEye></button>
                <dialog id={beTrainer._id} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="card w-full bg-black text-white shadow-md shadow-amber-500">
                            <figure className="h-[300px]"><img className="h-full w-full" src={beTrainer.image} alt="Shoes" /></figure>
                            <div className="card-body space-y-1">
                                <div className="flex justify-between items-center">
                                    <h2 className="card-title text-gray-300">{beTrainer.name}</h2>
                                    <div className='flex text-2xl mt-5'>
                                        <Link to={beTrainer.socialIcons?.facebook}><FaFacebook className='text-blue-500 bg-white rounded-full'></FaFacebook></Link>
                                        <FaTwitter className='text-blue-500 ml-5'></FaTwitter>
                                    </div>
                                </div>
                                <div className="text-gray-400">
                                    <p className="text-lg">Experience: {beTrainer.experienceYears}</p>
                                    <h3>Available Week:{beTrainer.availableWeek}</h3>
                                    <h3>Available Day:{beTrainer.availableDay}</h3>
                                </div>
                                <h2 className="card-title text-xl">{beTrainer.category}</h2>
                                <div className="flex justify-between">
                                    <button onClick={() => handleConfirm(beTrainer._id)} className="btn px-4 bg-amber-500 text-white mt-10">Confirm</button>
                                    <button onClick={() => handleDelete(beTrainer._id)} className="btn px-4  bg-amber-500 text-white mt-10">Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </dialog>
            </td>
        </tr>
    );
};

export default AppliedTrainerTab;