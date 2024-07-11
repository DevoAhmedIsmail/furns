import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css/autoplay";
import LatestNewsData from "../../../Data/LatestNewsData";
import BlogCard from "../../shared/BlogCard/BlogCard";

const LatestNewsSlider = () => {
  return (
    <div className="py-8">
        <Swiper
          modules={[Autoplay]}
          // spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            630: {
              slidesPerView: 2,
            },
            1040: {
              slidesPerView: 3,
            },

          }}
        >
          {LatestNewsData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard
                img={blog.img}
                title={blog.title}
                link={`/blogs/${blog.id}`}
                date={blog.date}
                description={blog.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default LatestNewsSlider;
