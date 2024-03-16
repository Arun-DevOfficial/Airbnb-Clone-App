import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
// import { Pagination } from "swiper/modules";
import Records from "../../assets/Data.json"; // Slide Data

const Slider = () => {
  return (
    <>
      <div className="p-3">
        <Swiper
          spaceBetween={16}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("clicked")}
        >
          {Records.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer">
                <img src={item.icons} alt="images" className="ml-1 w-7 h-7" />
                <p className="text-xs font-medium pt-2 text-black/60">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
