
import { FaBorderStyle, FaCalendar } from "react-icons/fa";


const BlogCard = ({blog}) => {
    const {title, date, image, author} = blog
    return (
        <div className="card w-full bg-black text-white shadow-md shadow-amber-500">
            <figure className="h-[300px]"><img className="h-full w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex flex-wrap justify-between -mt-5 mb-5">
                    <h3 className="flex items-center gap-5 text-gray-500"><FaCalendar></FaCalendar>{date}</h3>
                    <h3 className="flex items-center gap-5 text-gray-500"><FaBorderStyle></FaBorderStyle>{author}</h3>
                </div>
                <h2 className="card-title">{title} 
                </h2>
                {/* <p>{content}</p> */}
            </div>
        </div>
    );
};

export default BlogCard;