
import { useEffect, useState } from 'react';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Teams = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('/teams.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
   
    return (
        <div className='my-20'>
            <div className='text-center my-14'>
                <p className="text-3xl font-bold">Our Strongest Team</p>
                <h2 className="text-[#F4AF00] text-4xl font-semibold">MEET EXPERT TRAINERS</h2>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    items.map(item => <SwiperSlide key={item.id}>
                        <div className="card w-96 bg-black text-white shadow-md shadow-amber-500 relative overflow-hidden">
                            <figure className="h-[576px]">
                                <img src={item.image} alt="Shoes" className="rounded-xl h-full" />
                            </figure>
                            <div className="card-body items-center text-center absolute top-0 left-0 w-full h-full pt-14 bg-opacity-50 bg-black opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <h3>{item.name}</h3>
                                <h2 className="card-title text-2xl font-bold">{item.title}</h2>
                                <div className='flex text-4xl gap-10 mt-5'>
                                    <Link to={item.socialLinks.facebook}><FaFacebook className='text-blue-500 bg-white rounded-full'></FaFacebook></Link>
                                    <FaTwitter className='text-blue-500'></FaTwitter>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>

    );
};

export default Teams;