import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Shared/Title";
import Swal from "sweetalert2";
import AppliedTrainerTab from "./AppliedTrainerTab";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AppliedTrainer = () => {
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const { data: beTrainers = [], refetch } = useQuery({
        queryKey: ['beTrainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/beTrainer')
            return res.data
        }
    })
    // const filter = beTrainers.filter(item=> item._Id === )
    const handleConfirm = users => {
        const trainerInfo = {
            name: users.name,
            email: users.email,
            image: users.image,
            category: users.category,
            experienceYears: users.experienceYears,
            availableWeek: users.availableWeek,
            availableDay: users.availableDay,
        }
        axiosSecure.patch(`/users/trainer/${users.email}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    axiosSecure.post('/trainer', trainerInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                axiosSecure.delete(`/beTrainer/${users._id}`)
                                    .then(res => {
                                        if (res.data.deletedCount > 0) {
                                            Swal.fire({
                                                position: "center-start",
                                                icon: "success",
                                                title: `${users.name} is an trainer Now.!!`,
                                                showConfirmButton: false,
                                                timer: 1500
                                            });
                                            refetch()
                                            navigate('/dashboard')
                                        }
                                    })
                            }
                        })
                }
            })

    }

    const handleDelete = id => {
        axiosSecure.delete(`/beTrainer/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        title: "Deleted!",
                        text: "The user has been deleted.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <Title title='applied trainer'></Title>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead className="bg-[#D1A054] rounded-t-2xl text-white">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            beTrainers.map((beTrainer, index) => <AppliedTrainerTab
                                key={beTrainer._id}
                                beTrainer={beTrainer}
                                index={index}
                                handleConfirm={handleConfirm}
                                handleDelete={handleDelete}
                            ></AppliedTrainerTab>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedTrainer;