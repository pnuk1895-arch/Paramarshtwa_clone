import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ProfileImage from "../../assets/ProfileImage.png"

import "swiper/css"

const testimonials = [
  {
    name: "MR. RAVI KUMAR",
    image: ProfileImage,
  },
  {
    name: "MR. RAVI KUMAR",
    image: ProfileImage
  },
  {
    name: "MR. RAVI KUMAR",
    image: ProfileImage
  },
];

const testimonialText =
  ["SCMG is being set up through an extension to Space Combine; ahead in architecture and engineering and other tied, & putsup to project management. SCMG delivers sustainable results by partnering with clients to transfer knowledge, wisdom and skills to ensure long term success applied through all services under one roof."]

export default function Testimonials() {
  return (
    <section className="bg-slate-950 px-4 py-12 sm:px-6 md:px-8 sm:py-16 lg:px-10 lg:py-20 ">

      <div className="mx-auto max-w-6xl">

        {/* ================= HEADING ================= */}
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Testimonials
        </h2>


        {/* ================= PEOPLE ================= */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={30} // Adds gap between slides
          // 2. Use breakpoints to change to 3 slides on screens 640px and wider
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            }
          }}
          className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-18 max-md:shrink-0 ">

          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >

                {/* Profile Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-24 w-24 object-cover sm:h-24 sm:w-24 lg:h-24 lg:w-24"
                />

                {/* Name */}
                <h3 className="mt-4 text-lg font-bold text-white sm:text-base lg:text-xl">
                  {testimonial.name}
                </h3>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>



        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          slidesPerView={1}
          slidesPerGroup={1}

        >
          {[...testimonialText, ...testimonialText].map((content, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">

                <div className="mt-8 h-12 w-0.5 bg-orange-500" />

                {/* ================= TESTIMONIAL TEXT ================= */}
                <div className="mx-auto mt-8 max-w-6xl text-center sm:mt-10 lg:mt-8">

                  <p className="text-sm leading-7 text-white sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
                    {content}
                  </p>

                </div>


                {/* ================= QUOTE DECORATION ================= */}
                <div className="mx-auto mt-10 w-full flex max-w-xs items-center justify-center sm:mt-12">

                  {/* Left Line */}
                  <span className="h-0.5 flex-1 bg-orange-500" />

                  {/* Quote Circle */}
                  <div className="mx-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                    <Quote
                      className="h-5 w-5 text-red-600"
                      fill="currentColor"
                    />
                  </div>

                  {/* Right Line */}
                  <span className="h-0.5 flex-1 bg-orange-500" />

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}