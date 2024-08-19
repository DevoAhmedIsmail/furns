import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Images
import sponsor1 from "../../../assets/images/sponsors/company-logo-1.png";
import sponsor2 from "../../../assets/images/sponsors/company-logo-2.png";
import sponsor3 from "../../../assets/images/sponsors/company-logo-3.png";
import sponsor4 from "../../../assets/images/sponsors/company-logo-4.png";
import sponsor5 from "../../../assets/images/sponsors/company-logo-5.png";
import sponsor6 from "../../../assets/images/sponsors/company-logo-6.png";
import sponsor7 from "../../../assets/images/sponsors/company-logo-7.png";

import "swiper/css/autoplay";
const Sponsors = () => {
  const sponsorsData = [
    { image: sponsor1 },
    { image: sponsor2 },
    { image: sponsor3 },
    { image: sponsor4 },
    { image: sponsor5 },
    { image: sponsor6 },
    { image: sponsor7 },
  ];

  return (
    <div className="wrapper">
      <div className="py-12">
        <Swiper
          modules={[Autoplay]}
          // spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            440: {
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
          {sponsorsData.map((sponsorItem, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center w-full">
                <img
                  src={sponsorItem.image}
                  alt="Sponsor"
                  className="object-contain"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sponsors;
