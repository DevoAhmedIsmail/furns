import CategoriesData from "../../../Data/CategoriesData"
import CategoryCard from "./CategoryCard"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import "swiper/css/autoplay"

const CategoriesSlider = () => {
  
  return (
    <div className="py-8">
        <div className="wrapper">
        <Swiper
         modules={[Autoplay]}
          // spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{delay: 2000}}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            440:{
              slidesPerView: 2,
            },
            612: {
              slidesPerView: 3,
            },
            840: {
              slidesPerView: 4,
            },
            1050: {
              slidesPerView: 5,
            },
          
          }}
        >
          {
            CategoriesData.map((category, index) => (
              <SwiperSlide key={index}>
                <CategoryCard img={category.img} title={category.title} link={category.link} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        </div>
    </div>
  )
}

export default CategoriesSlider
