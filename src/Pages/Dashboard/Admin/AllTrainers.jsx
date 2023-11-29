import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Title from "../../../Components/Shared/Title";
import { Link } from "react-router-dom";


const AllTrainers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: trainers = []}= useQuery({
        queryKey: ['trainers'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/trainer')
            console.log(res.data)
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
                        <th>Name</th>
                        <th>email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trainers.map((trainer, index)=><tr key={index}>
                        <th>{index+1}</th>
                        <td>{trainer.name}</td>
                        <td>{trainer.email}</td>
                        <td><Link><button>pay</button></Link></td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default AllTrainers;