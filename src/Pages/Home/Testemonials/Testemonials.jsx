import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testemonials = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    // console.log(reviews);
    return (
        <section>
            <SectionTitle subHeader={"what our client say"} header={"Testimolials"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
      {
        reviews.map(r=><SwiperSlide key={r._id} r={r}>

            <div className="m-24 text-center">
            <Rating className=" mx-auto my-10"
      style={{ maxWidth: 180 }}
      value={r.rating}
      readOnly
    />
                <p>{r.details}</p>
                <p className="text-center text-2xl text-amber-500">{r.name}</p>
            </div>
        </SwiperSlide>)
      }
      </Swiper>
        </section>
    );
};

export default Testemonials;