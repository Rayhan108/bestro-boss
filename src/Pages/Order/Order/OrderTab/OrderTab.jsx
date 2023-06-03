import FoodCard from "../../../../component/FoodCart/FoodCard";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const OrderTab = ({items}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
    return (
        <div >
      
           <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
<div className="grid grid-cols-3">
{items.map((d) => (
          <FoodCard key={d._id} d={d}></FoodCard>
        ))}
</div>
        </SwiperSlide>
   
      </Swiper>
      </div>
    );
};

export default OrderTab;