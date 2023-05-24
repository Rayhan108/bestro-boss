
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTitle from '../../../component/SectionTitle/SectionTitle'
const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeader="---From 11:00am to 10:00pm---"
            header="Order now"
            ></SectionTitle>
                <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-16">
            <img src={slide1} alt="" />
                 <h3 className="-mt-12 uppercase text-3xl text-white text-center">salad</h3>
                 </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="-mt-12 uppercase text-3xl text-white text-center">pizza</h3>
                 </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="-mt-12 uppercase text-3xl text-white text-center">soups</h3>
                 </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="-mt-12 uppercase text-3xl text-white text-center">desert</h3>
                 </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="-mt-12 uppercase text-3xl text-white text-center">salad</h3>
                 </SwiperSlide>
      
       
       
       
      </Swiper>
        </section>
    );
};

export default Category;