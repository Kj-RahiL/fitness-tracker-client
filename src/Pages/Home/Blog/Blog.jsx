import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import background from '../../../assets/Home/mesh-814.png'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="py-20 bg-cover" style={{ backgroundImage: `url(${background})`}}>
            <h2 className="text-center text-5xl font-bold my-8 text-white">OUR LATEST BLOG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
                {
                    blogs.map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;