import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Shared/Title";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllTrainers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: trainers = [] } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/trainer')
            // console.log(res.data)
            return res.data
        }
    })

    return (
        <div>
            <Title title='All Trainers'></Title>
            <div className="overflow-x-auto">
                <table className="table bg-neutral-content">
                    {/* head */}
                    <thead>
                        <tr className="text-amber-500 bg-neutral-950">
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Salary</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainers.map((trainer, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-20">
                                            <img src={trainer.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </th>
                                <td>{trainer.name}</td>
                                <td>{trainer.email}</td>
                                <td>{trainer.salary}</td>
                                <td>
                                    <Link to={`/dashboard/payment/${trainer._id}`}>
                                        <button className="btn btn-outline">pay</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainers;