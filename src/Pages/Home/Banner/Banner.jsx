import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from '../../../assets/Home/Slider/slide1.jpg'
import slide2 from '../../../assets/Home/Slider/slide2.jpg'
import slide3 from '../../../assets/Home/Slider/slide3.jpg'
const Banner = () => {
    return (
        <>
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
                modules={[Pagination, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide className=''>
                    <div className="hero relative">
                        <img src={slide1} alt="Slide 1" />
                        <div className="hero-overlay bg-[#000000] bg-opacity-30"></div>
                        <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <h1 className="text-7xl font-bold uppercase">Begin Your Fitness Journey..!!</h1>
                            <p className="text-2xl text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <button className='btn btn-md text-white bg-[#c500d4] hover:bg-transparent'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero relative">
                        <img src={slide2} alt="Slide 1" />
                        <div className="hero-overlay bg-[#000000] bg-opacity-40"></div>
                        <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <h1 className="text-7xl font-bold uppercase">Keep Health Fit For Every Moment..!!</h1>
                            <p className="text-2xl text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <button className='btn btn-md text-white bg-[#c500d4] hover:bg-transparent'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative hero">
                        <img src={slide3} alt="Slide 1" />
                        <div className="hero-overlay bg-[#000000] bg-opacity-60"></div>
                        <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <h1 className="text-7xl font-bold uppercase">get body in shape & stay healthy..!!</h1>
                            <p className="text-2xl text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <button className='btn btn-md text-white bg-[#c500d4] hover:bg-transparent'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className="hero h-[700px] bg-cover py-44 px-56 bg-blend-overlay bg-[#2f2f2f56]" style={{ backgroundImage: `url(${slide3})` }}>
                        <div className="hero-overlay bg-[#000000] bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold uppercase">fit to hit body</h1>
                                <p className="mb-5 text-white"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </>
    );
};

export default Banner;