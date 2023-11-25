
import { useEffect, useState } from 'react';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Teams = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('/teams.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <p className="text-2xl font-bold">Our Strongest Team</p>
            <h2 className="text-[#F4AF00] text-4xl font-semibold">MEET EXPERT TRAINERS</h2>
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
                            <div className="card-body items-center text-center absolute top-0 left-0 w-full h-full pt-4 bg-opacity-40 bg-black opacity-0 hover:opacity-100 transition-opacity duration-300"> 
                                <h2 className="card-title text-2xl font-bold">{item.title}</h2>
                                <p className="text-base text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>

    );
};

export default Teams;