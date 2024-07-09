import { Swiper, SwiperSlide  } from "swiper/react";
import { Navigation, Pagination, EffectFade, A11y} from "swiper/modules";

import HomeSliderData from "../../../Data/HomeSlider";
import HeroSlide from "./HeroSlide";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSection.scss"
import "swiper/css/effect-fade"

const HeroSection = () => {
  return (
    <section className="hero-section">
        <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination,EffectFade, A11y]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}

        >
        {HomeSliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <HeroSlide
                  description={slide.description}
                  img={slide.img}
                  label={slide.label}
                  title={slide.title}
              />
            </SwiperSlide>
        ))}
        </Swiper>
    </section>
  );
};

export default HeroSection;
