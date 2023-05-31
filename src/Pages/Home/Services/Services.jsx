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
          className=" md:h-[570px] md:w-[1280px] parallax-bg flex items-center overflow-hidden justify-cente"
          style={{
            backgroundImage: `url("https://i.ibb.co/qdJH6Kx/chef-service.jpg")`
           
          }}
          data-swiper-parallax="-23%"
        >
         
            <div
              className=" flex items-center justify-center text-center md:bg-white w-[1096px] mx-auto  p-10"
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
      {/* <div className="hero  mb-20 md:h-[570px] md:w-[1280px]"  style={{ backgroundImage: `url("https://i.ibb.co/qdJH6Kx/chef-service.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
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
</div> */}
    </>
  );
};

export default Services;
