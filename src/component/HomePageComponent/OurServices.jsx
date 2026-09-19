import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";

const services = [
    {
        title: "Master planning",
        description:
            "Master planning is a comprehensive approach to the long-term development and design of a specific area, such as a city, community.",
        image: "/images/master-planning.jpg",
    },
    {
        title: "Architecture",
        description:
            "Architecture is the art and science of designing and constructing buildings, structures, and spaces that are functional, aesthetically pleasing.",
        image: "/images/architecture.jpg",
    },
    {
        title: "Feasibility studies",
        description:
            "Feasibility studies are assessments conducted to evaluate the viability of a project or initiative before it is undertaken.",
        image: "/images/feasibility.jpg",
    },
    {
        title: "Project Management",
        description:
            "Project management involves the planning, organization, and execution of a project to achieve specific goals within a defined timeframe and budget.",
        image: "/images/project-management.jpg",
    },
];

export default function OurServices() {

    const sliderServices = [
        ...services,
        ...services,
        ...services,
    ];

    return (
        <section className="w-full h-160 overflow-hidden bg-slate-950 py-12">

            {/* ================= HEADING ================= */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <h2 className="mb-9 text-3xl font-bold text-white sm:text-3xl lg:mb-10 lg:text-4xl">
                    Our Services
                </h2>

            </div>


            {/* ================= CARDS ================= */}
            <div className="w-[90%] ml-38 h-100">

                <Swiper
                    modules={[Autoplay]}

                    loop={true}

                    speed={500}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}

                    allowTouchMove={true}

                    slidesPerView={4.5}
                    slidesPerGroup={1}
                    spaceBetween={0}

                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },

                        640: {
                            slidesPerView: 2.5,
                        },

                        1024: {
                            slidesPerView: 3.5,
                        },

                        1280: {
                            slidesPerView: 4.5,
                        },
                    }}
                >

                    {sliderServices.map((service, index) => (

                        <SwiperSlide key={`${service.title}-${index}`}>

                            <div className="px-2">

                                <article className="group flex flex-col overflow-hidden bg-white">

                                    {/* IMAGE */}
                                    <div className="relative aspect-video overflow-hidden">

                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* ARROW */}
                                        <button
                                            type="button"
                                            className="absolute bottom-0 right-0 flex h-10 w-16 items-center justify-center bg-orange-600 text-white transition-colors duration-300 hover:bg-red-600"
                                        >
                                            <FaArrowRight className="text-lg" />
                                        </button>

                                    </div>


                                    {/* CONTENT */}
                                    <div className="flex min-h-60 flex-1 flex-col p-5 sm:min-h-64 sm:p-6">

                                        <h4 className="mb-4 text-lg whitespace-nowrap font-bold leading-tight text-slate-900 sm:text-xl">
                                            {service.title}
                                        </h4>

                                        <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                                            {service.description}
                                        </p>

                                    </div>

                                </article>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    );
}