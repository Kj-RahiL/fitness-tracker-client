import { useForm } from "react-hook-form";
import Cover from "../../../Components/Shared/Cover";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BeTrainer = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    // const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        // const imageFile = { image: data.image[0] }
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        console.log(data)
        // if (res.data.success) {
        //     const menuItem = {
        //         name: data.name,
        //         email: data.email,
        //         age: parseFloat(data.age),
        //         image: res.data.data.display_url,
        //         availableWeek: data.availableWeek,
        //         availableDay: data.availableDay,
        //     }
        //     const menuRes = await axiosSecure.post('/menu', menuItem)
        //     console.log(menuRes.data)
        //     if (menuRes.data.insertedId) {
        //         reset()
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: `${data.name} is added to the menu.`,
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //     }
        // }
        // console.log('with image url', res.data);
    }
    return (
        <div>
            <Cover text='Wanna be trainer' title='Fill up from' ></Cover>
            <div className="w-3/4 my-10 mx-auto px-5 md:px-10 lg:px-20 py-5 bg-[#f4af004f] card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name and email row */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Full Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Your Full Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("email", { required: true })}
                                    value={user?.email}
                                    readOnly
                                    placeholder="Enter Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* age and profile image row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Age</span>
                            </label>
                            <label className="input-group">
                                <input type="number"
                                    {...register("age", { required: true })}
                                    placeholder="Your age" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Image</span>
                            </label>
                            <label className="input-group w-full">
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs " />
                            </label>
                        </div>
                    </div>

                    {/* skills */}
                    <div className="form-control w-full mb-8">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Skills</span>
                        </label>
                        <label>
                            <select {...register('skills', { required: true })} className="select-bordered w-full max-w-xs" multiple>
                                <option value="javascript">JavaScript</option>
                                <option value="react">React</option>
                                <option value="nodejs">Node.js</option>
                            </select>
                        </label>
                    </div>

                    {/* available time week and day */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Available time in a week</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("availAble week", { required: true })}
                                    placeholder=" sunday, monday"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-medium text-[#63433f]">Available time in a day</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    {...register("availableDay", { required: true })}
                                    placeholder=" 6.00am to 9.00am" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input className="btn btn-block normal-case hover:bg-[#f4af0075] bg-[#b48a22] text-white" type="submit" value="Apply" />
                </form>
            </div>

        </div>
    );
};

export default BeTrainer;