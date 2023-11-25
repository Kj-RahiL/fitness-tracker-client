import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

import background from '/bg.svg'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div >
            <div className='text-center my-5 mt-10 space-y-2'> 
                <h3 className='text-4xl uppercase font-bold text-[#F4AF00]'>testimonials</h3>
                <p className='text-2xl font-bold'>What Client s Say</p>
            </div>

            <div className='bg-cover py-10' style={{ backgroundImage: `url(${background})`}}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
                >
                    <div >
                        {
                            reviews.map(review => <SwiperSlide key={review.id}
                            >

                                <div className="mx-24 flex flex-col justify-center items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p className="py-5 w-3/4 text-center text-xl">{review.details}</p>
                                    <div className='text-center mb-10'>
                                        <h2 className="text-[#CD9003] text-3xl font-semibold">{review.name}</h2>
                                        <p className='text-gray-400'>{review.title}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;