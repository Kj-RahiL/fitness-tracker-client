import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Shared/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageMember = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            console.log(res.data)
            return res.data
        }
    })

    const filteredUsers = users.filter(user => user.role !== "admin" && user.role !== "trainer");
    console.log(filteredUsers)
    return (
        <div>
            <Title title='manage member'></Title>
            <div className="overflow-x-auto">
                <table className="table bg-neutral-content">
                    {/* head */}
                    <thead>
                        <tr className="text-amber-500 bg-neutral-950">
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredUsers.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-20">
                                            <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td >
                                   <button className="btn btn-outline"> Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMember;