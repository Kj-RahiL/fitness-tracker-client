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
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>{slide1}</SwiperSlide>
                <SwiperSlide>{slide2}</SwiperSlide>
                <SwiperSlide>{slide3}</SwiperSlide>
               
            </Swiper>
        </>
    );
};

export default Banner;