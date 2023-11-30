import { useForm } from "react-hook-form";
import Title from "../../../Components/Shared/Title";
import useAuth from "../../../Hooks/useAuth";
import useTrainer from "../../../Hooks/useTrainer";
import UseAdmin from "../../../hooks/useAdmin";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddNewForum = () => {
    const isAdmin = UseAdmin()
    const isTrainer = useTrainer()
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
        console.log(imageFile, res)
        if (res.data.success) {
            const contentItem = {
                author: data.author,
                badge: data.badge,
                image: res.data.data.display_url,
                title: data.title,
                date: data.date,
                content: data.content,
            }

            console.log(contentItem)
            axiosSecure.post('/forum', contentItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: `Added forum Successful.!!`,
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
            <Title title='add new forum'></Title>

            <div className="w-3/4 my-10 mx-auto px-5 md:px-10 lg:px-20 py-5 bg-[#f4af004f] card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* author and positions */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Author Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("author", { required: true })}
                                    defaultValue={ user.displayName }
                                    placeholder="Enter Class Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Badge</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("badge", { required: true })}
                                    value={isAdmin === true? "admin" : isTrainer === true ? "trainer" : "trainer"}
                                    readOnly
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* title and date */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Content Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("title", { required: true })}
                                    placeholder="Top 10 Fitness Tips "
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date"
                                    {...register("date", { required: true })}
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/*  descriptions*/}
                    <div className="form-control w-full mb-8">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Content</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                {...register("content", { required: true })}
                                placeholder="Write your content" className="textarea textarea-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full mb-8">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Content Image</span>
                        </label>
                        <label className="input-group w-full">
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs " />
                        </label>
                    </div>
                    <input className="btn btn-block normal-case hover:bg-[#f4af0075] bg-[#b48a22] text-white" type="submit" value="Add Forum" />
                </form>
            </div>
        </div>
    );
};

export default AddNewForum;