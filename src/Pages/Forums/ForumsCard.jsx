import { FaBorderStyle, FaCalendar } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { BiDislike, BiLike } from "react-icons/bi";

const ForumsCard = ({ forum, refetch  }) => {
    const { title, date, image, author, badge, content, upVotes, downVotes } = forum
    const axiosPublic = useAxiosPublic()

    const handleUpVote = async (forumId) => {
        const response = await axiosPublic.put(`/forum/upvote/${forumId}`);
        if (response.data.modifiedCount > 0) {
            refetch()
            toast.success('your up vote successful!')
        }

    }

    const handleDownVote = async (forumId) => {
        const response = await axiosPublic.put(`/forum/downvote/${forumId}`);
        if (response.data.modifiedCount > 0) {
            refetch()
            toast.success('your down vote successful!')
        }

    };
    return (
        <div className="card w-full bg-black text-white shadow-md shadow-amber-500">
            <figure className="h-[300px]"><img className="h-full w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex flex-wrap justify-between -mt-5 mb-5">
                    {
                        badge == "admin" ? <h3 className="items-center border border-green-400 px-1 rounded text-green-700">{badge}</h3>
                            : <h3 className="items-center border border-green-400 rounded px-1  text-green-700">{badge}</h3>
                    }
                    <h3 className="flex items-center gap-1 text-gray-500"><FaBorderStyle></FaBorderStyle>{author}</h3>
                    <h3 className="flex items-center gap-1 text-gray-500"><FaCalendar></FaCalendar>{date}</h3>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="text-gray-400">{content}</p>
                <div className="flex justify-between mt-5">
                    <button className="flex gap-2 items-center text-2xl" onClick={() => handleUpVote(forum._id)}><BiLike></BiLike>{upVotes}</button>
                    <button className="flex gap-2 items-center text-2xl" onClick={() => handleDownVote(forum._id)}>{downVotes}<BiDislike></BiDislike></button>
                </div>
            </div>

        </div>
    );
};

export default ForumsCard;