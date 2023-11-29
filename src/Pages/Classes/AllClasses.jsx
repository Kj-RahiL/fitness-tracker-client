import { useQuery } from "@tanstack/react-query";
import Title from "../../Components/Shared/Title";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import background from '../../assets/Home/mesh-814.png'
import { Link } from "react-router-dom";


const AllClasses = () => {
    const axiosPublic = useAxiosPublic()
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/addClass')
            console.log(res.data)
            return res.data
        }
    })



    return (
        <div className="my-20">
            <Title title='our all classes'></Title>
            <div className="py-20 bg-cover" style={{ backgroundImage: `url(${background})` }}>
                <h2 className="text-5xl text-center font-bold text-white mb-16">Awesome Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-8">
                    {
                        classes?.map(item => <div key={item._id} className="card  bg-black text-white shadow-md shadow-amber-500">
                            <figure className="px-10 pt-10 h-[220px]">
                                <img src={item.icon} alt="Shoes" className="rounded-xl h-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl font-bold">{item.className}</h2>
                                <p className="card-title text-gray-400">{item.weekDays}, {item.time}</p>
                                <p className="text-base text-gray-400">{item.description}</p>
                                <Link to='/bookedPrice'>
                                    <button className="btn btn-outline bg-amber-700 text-white">Join Now</button>
                                </Link>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllClasses;