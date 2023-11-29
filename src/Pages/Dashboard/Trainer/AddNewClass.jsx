import { useForm } from "react-hook-form";
import Title from "../../../Components/Shared/Title";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddNewClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()


    const onSubmit = async(data )=> {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(imageFile )
        if (res.data.success) {
            const classItem = {
                className: data.className,
                instructorName: data.instructorName,
                image: res.data.data.display_url,
                weekDays: data.weekDays,
                time: data.time,
                description: data.description,
            }

            console.log(classItem)
            axiosSecure.post('/addClass', classItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: `Class Added Successful.!!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        reset()
                    }
                })
        }
    }
    return (
        <div>
            <Title title='add new class'></Title>

            <div className="w-3/4 my-10 mx-auto px-5 md:px-10 lg:px-20 py-5 bg-[#f4af004f] card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Class Name and Instructor Name row */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Class Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("className", { required: true })}
                                    placeholder="Enter Class Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Instructor Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("instructorName", { required: true })}
                                    value={user?.displayName}
                                    readOnly
                                    placeholder="Enter Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* available week day and time */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">WeekDays</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("weekDays", { required: true })}
                                    placeholder=" sunday, monday"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Day Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("time", { required: true })}
                                    placeholder=" 6.00am to 9.00am" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/*  descriptions*/}
                    <div className="form-control w-full mb-8">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Descriptions</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                {...register("description", { required: true })}
                                placeholder="describe your class" className="textarea textarea-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full mb-8">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Image</span>
                            </label>
                            <label className="input-group w-full">
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs " />
                            </label>
                        </div>
                    <input className="btn btn-block normal-case hover:bg-[#f4af0075] bg-[#b48a22] text-white" type="submit" value="Apply" />
                </form>
            </div>
        </div>
    );
};

export default AddNewClass;