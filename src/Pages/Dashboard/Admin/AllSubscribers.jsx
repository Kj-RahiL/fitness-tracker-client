import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Shared/Title";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const AllSubscribers = () => {
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()
    const {data: subscriber = []}= useQuery({
        queryKey: ['subscriber'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/subscribe')
            console.log(res.data)
            return res.data
        }
    })


return (
    <div>
        <Title title='Newsletter All Subscriber'></Title>
        <div className="overflow-x-auto">
            <table className="table bg-neutral-content">
                {/* head */}
                <thead>
                    <tr className="text-amber-500 bg-neutral-950">
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subscriber.map((subscribe, index)=><tr key={index}>
                        <th>{index+1}</th>
                        <td>{subscribe.name}</td>
                        <td>{subscribe.email}</td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
);
}

export default AllSubscribers;