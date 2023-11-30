import { useForm } from 'react-hook-form';
import image from '../../../assets/Home/newsteller.jpg'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { toast } from 'react-toastify';
const Newsletter = () => {
    const { register, handleSubmit , reset} = useForm()
    const axiosPublic = useAxiosPublic()
    const onSubmit = async(data) => {
        const subscriber = {
            name: data.name,
            email: data.email
        }
        console.log(subscriber)
        axiosPublic.post('/subscribe', subscriber)
        .then(res => {
            if (res.data.insertedId) {
                console.log('subscribe add database')
                reset();
                toast.success('Newsletter Subscribed.!!')
            }
        })
    }
    return (
        <div className="bg-neutral-950 py-20">
            <h2 className="text-center text-3xl md:text-5xl font-bold my-8 text-white uppercase">Newsletter</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <img className='hidden md:block' src={image} alt="" />
                <form onSubmit={handleSubmit(onSubmit)} className="card-body flex justify-center items-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl text-white font-semibold">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Name here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl text-white font-semibold">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <button className='btn btn-outline text-[#F4AF00]'>Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;