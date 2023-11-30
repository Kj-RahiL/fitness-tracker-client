import { FaBorderStyle, FaCalendar } from "react-icons/fa";

const ForumsCard = ({ forum }) => {
    const { title, date, image, author, badge } = forum
    return (
        <div className="card w-full bg-black text-white shadow-md shadow-amber-500">
            <figure className="h-[300px]"><img className="h-full w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between -mt-5 mb-5">
                    {
                        badge == "admin" ? <h3 className="items-center border border-green-400 px-1 rounded text-green-700">{badge}</h3>
                            : <h3 className="items-center border border-green-400 rounded px-1  text-green-700">{badge}</h3>
                    }
                    <h3 className="flex items-center gap-1 text-gray-500"><FaBorderStyle></FaBorderStyle>{author}</h3>
                    <h3 className="flex items-center gap-1 text-gray-500"><FaCalendar></FaCalendar>{date}</h3>
                </div>
                <h2 className="card-title">{title}
                </h2>
                {/* <p>{content}</p> */}
            </div>
        </div>
    );
};

export default ForumsCard;