import { FaCircle } from "react-icons/fa";
import heroImage1 from '../../assets/heroImage/heroImage1.png'
import heroImage2 from "../../assets/heroImage/heroImage2.png"
import heroImage3 from "../../assets/heroImage/heroImage3.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper core and required module styles
import 'swiper/css';
// Import the fade effect CSS here
import 'swiper/css/effect-fade';
import { useState } from "react";

// Example array: Replace with your actual image imports
const sliderImages = [heroImage1, heroImage2, heroImage3];

const HeroSection = () => {

  // 1. Create state to track the current slide and the Swiper instance
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* 2. Setup Swiper without the Pagination module */}
      <Swiper
        modules={[Autoplay,EffectFade]}
        // Declare the effect type
        effect="fade"
        // Ensure smooth blending between your scaled images
        fadeEffect={{ crossFade: true }}
        speed={1300}
        loop={true}
        onSwiper={setSwiperInstance} // Save instance so dots can click to slide
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update state on swipe
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {sliderImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="ml-auto h-auto w-full overflow-hidden">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="block
                h-110
                translate-y-11
                scale-110
                max-md:object-contain
                w-full
                object-cover
                object-center
                
                transition-all 
                duration-500 
                ease-in-out

                md:h-130
                md:translate-y-24
                md:scale-105
                lg:h-152
                lg:translate-y-9
                lg:scale-105
                min-[1670px]:object-[center_-200px]
                min-[1670px]:scale-100!
                min-[1670px]:h-200!
                "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 3. Map your custom React dots over the array */}
      <div className="absolute right-4 top-2/3 z-5 flex -translate-y-1/2 flex-col items-center gap-3 min-[1440px]:gap-6! sm:right-5 md:right-6 lg:right-30">
        {sliderImages.map((_, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              onClick={() => swiperInstance?.slideToLoop(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                flex h-4 w-4 min-[1440px]:h-6! min-[1440px]:w-6! items-center justify-center rounded-full bg-white transition-all
                ${isActive ? 'border-2 border-orange-500' : 'border-2 border-transparent'}
              `}
            >
              <FaCircle
                className={`text-[0.45rem] min-[1440px]:text-[0.60rem] ${isActive ? 'text-orange-500' : 'text-white'}`}
              />
            </button>
          );
        })}
      </div>

    </section>
  );
};

export default HeroSection;