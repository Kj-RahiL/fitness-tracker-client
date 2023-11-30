import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import background from '../../assets/Home/mesh-814.png'
import ForumsCard from "./ForumsCard";
import { Helmet } from "react-helmet-async";

const Forums = () => {
    const axiosPublic = useAxiosPublic()
    const { data: forums = [], refetch } = useQuery({
        queryKey: ['forums'],
        queryFn: async () => {
            const res = await axiosPublic.get('/forum')
            console.log(res.data)
            return res.data
        }
    })
    // console.log(forums)

    return (
        <div>
            <Helmet>
                <title>FIT TO HIT | Forums</title>
            </Helmet>
            <div className="py-20 bg-cover" style={{ backgroundImage: `url(${background})`}}>
            <h2 className="text-center text-5xl font-bold my-8 text-white uppercase">our community posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
                {
                    forums.map(forum=><ForumsCard key={forum._id} forum={forum} refetch={refetch }></ForumsCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Forums;