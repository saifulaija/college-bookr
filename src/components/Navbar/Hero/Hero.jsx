import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";
import mainSlider from "../../../data/mainSlider";
import SingleSlider from "../SingleSlider/SingleSlider";
const Hero = () => {
  return (
    <div className="main-slider md:container md:mx-auto h-40 mt-6">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation, Autoplay, EffectFade]}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleSlider slider={slider}></SingleSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
