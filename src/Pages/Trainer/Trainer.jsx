import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover";

import background from '../../assets/Home/mesh-814.png'
import TrainerCard from "./TrainerCard";
import beTrainerImage from '../../assets/trainer/team-1.jpg'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Trainer = () => {
    
    const axiosPublic = useAxiosPublic()
    const {data: items = []}= useQuery({
        queryKey: ['items'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/trainer')
            return res.data
        }
    })
    // console.log(items)

    return (
        <div>
            <Helmet>
                <title>FIT TO HIT | Trainer</title>
            </Helmet>
            <Cover text='Meet Our Experts' title='Trainer'></Cover>
            <div className="py-20 bg-cover" style={{ backgroundImage: `url(${background})` }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
                    {
                        items.map(item => <TrainerCard key={item._id} item={item}></TrainerCard>)
                    }
                </div>
            </div>

            {/* become trainer */}
            <div className="hero relative my-20">
                <img className="w-full max-h-[60vh]" src={beTrainerImage} alt="Slide 1" />
                <div className="hero-overlay bg-[#000000] bg-opacity-80"></div>
                <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="text-3xl md:text-6xl font-bold mb-8">Become A Trainer</h1>
                    <Link to='beTrainer'>
                        <button className='btn lg:btn-lg uppercase text-neutral-200 bg-[#b68a1d] hover:bg-transparent py-3 px-8'>Join our team <FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Trainer;