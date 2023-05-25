import { Swiper } from "swiper/react";
// import service from '../../../assets/home/chef-service.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
const Services = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          marginBottom: "20px",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg flex items-center overflow-hidden justify-cente"
          style={{
            backgroundImage: `url("https://i.ibb.co/qdJH6Kx/chef-service.jpg")`,
            width: "1280px",
            height: "570px",
          }}
          data-swiper-parallax="-23%"
        >
         
            <div
              className=" md:flex items-center justify-center text-center bg-white md:w-[1096px] mx-auto  p-10"
              data-swiper-parallax="-500"
            >
              <div>
                <h3 className="text-center font-extrabold text-3xl">
                  Bistro Boss
                </h3>
                <p className=" font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
        
        </div>
      </Swiper>
   
    </>
  );
};

export default Services;
