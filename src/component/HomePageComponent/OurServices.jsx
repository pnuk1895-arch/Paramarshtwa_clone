import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Architecture from "../../assets/OurServices/Architecture.png";
import MasterPlanning from "../../assets/OurServices/MasterPlanning.png";
import FeasibilityStudies from "../../assets/OurServices/Feasibility.png";
import ProjectManagement from "../../assets/OurServices/ProjectManagement.png";

import "swiper/css";

const services = [
    {
        title: "Master planning",
        description:
            "Master planning is a comprehensive approach to the long-term development and design of a specific area, such as a city, community.",
        image: MasterPlanning,
        path: "/Master_Planning",
    },
    {
        title: "Architecture",
        description:
            "Architecture is the art and science of designing and constructing buildings, structures, and spaces that are functional, aesthetically pleasing.",
        image: Architecture,
        path: "/Architecture",
    },
    {
        title: "Feasibility studies",
        description:
            "Feasibility studies are assessments conducted to evaluate the viability of a project or initiative before it is undertaken.",
        image: FeasibilityStudies,
        path: "/Feasibility_studies",
    },
    {
        title: "Project Management",
        description:
            "Project management involves the planning, organization, and execution of a project to achieve specific goals within a defined timeframe and budget.",
        image: ProjectManagement,
        path: "/Project_management",
    },
];

export default function OurServices() {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [mobileDot, setMobileDot] = useState(0);
    const [desktopDot, setDesktopDot] = useState(0);

    const sliderServices = [
        ...services,
        ...services,
        ...services,
    ];

    const handleSlideChange = (swiper) => {

        // Get original service index
        const realIndex =
            swiper.realIndex % services.length;

        // Mobile → 4 dots
        setMobileDot(realIndex);

        // sm and above → 2 dots
        setDesktopDot(Math.floor(realIndex / 2));
    };

    const goToMobileSlide = (index) => {

        if (!swiperInstance) return;

        swiperInstance.slideToLoop(index);
    };

    const goToDesktopSlide = (index) => {

        if (!swiperInstance) return;

        const slideIndex = index * 2;

        swiperInstance.slideToLoop(slideIndex);
    };

    return (
        <section className="h-160 w-full overflow-hidden bg-slate-950 py-12">

            {/* HEADING */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10px xl:px-0!">
            <div className="w-full">

                <h2 className="mb-9 text-3xl font-bold text-white lg:mb-10 lg:text-4xl">
                    Our Services
                </h2>

            </div>


            {/* SLIDER */}

            <div className="h-116 w-full xl:w-330.5 min-[1440px]:w-[1932px]! overflow-hidden sm:h-110 xl:h-120 ">

                <Swiper
                    modules={[Autoplay]}
                    onSwiper={setSwiperInstance}
                    onSlideChange={handleSlideChange}

                    loop={true}

                    speed={500}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}

                    allowTouchMove={true}

                    slidesPerView={5}
                    slidesPerGroup={1}
                    spaceBetween={20}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },

                        640: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },

                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                        },

                        1280: {
                            slidesPerView: 4.5,
                            slidesPerGroup: 1,
                        },
                        1440:{
                            slidesPerView:6.5,
                            slidesPerGroup:1
                        }
                    }}
                >

                    {sliderServices.map((service, index) => (

                        <SwiperSlide
                            key={`${service.title}-${index}`}
                        >

                            <div className="">

                                <article className="group relative flex flex-col overflow-hidden bg-white">

                                    {/* IMAGE */}

                                    <div className="aspect-video overflow-hidden">

                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="
                                                h-full
                                                w-full
                                                scale-110
                                                object-cover
                                                transition-transform
                                                duration-500
                                                group-hover:scale-100
                                            "
                                        />

                                        {/* ORANGE OVERLAY */}

                                        <div
                                            className="
                                                absolute
                                                top-0
                                                left-0
                                                right-0
                                                bottom-64
                                                bg-blue-400
                                                opacity-0
                                                transition-opacity
                                                duration-500
                                                group-hover:opacity-20
                                            "
                                        />

                                        {/* ARROW */}

                                        <Link
                                            to={service.path}
                                            className="
                                                absolute
                                                right-0
                                                top-36
                                                flex
                                                h-8
                                                w-18
                                                translate-x-14
                                                items-center
                                                justify-center
                                                bg-orange-600
                                                text-white
                                                opacity-0
                                                transition-all
                                                duration-500
                                                group-hover:-translate-x-14
                                                group-hover:opacity-100
                                            "
                                        >
                                            <FaArrowRight className="text-lg" />
                                        </Link>

                                    </div>


                                    {/* CONTENT */}

                                    <div className="flex min-h-60 flex-1 flex-col p-5 sm:min-h-64 sm:p-6">

                                        <h4 className="mb-4 whitespace-nowrap text-lg font-bold leading-tight text-slate-900 sm:text-xl">
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


            {/* ================= MOBILE DOTS ================= */}

            <div className="mt-6 flex justify-center gap-3 sm:hidden">

                {[0, 1, 2, 3].map((dot) => (

                    <button
                        key={dot}
                        type="button"
                        onClick={() => goToMobileSlide(dot)}
                        className={`
                            h-3
                            w-3
                            rounded-full
                            transition-all
                            duration-300
                            ${
                                mobileDot === dot
                                    ? "bg-red-600"
                                    : "bg-slate-400"
                            }
                        `}
                    />

                ))}

            </div>


            {/* ================= TABLET + DESKTOP DOTS ================= */}

            <div className="mt-6 ml-8 hidden justify-start gap-3 sm:flex xl:invisible ">

                {[0, 1].map((dot) => (

                    <button
                        key={dot}
                        type="button"
                        onClick={() => goToDesktopSlide(dot)}
                        className={`
                            h-3
                            w-3
                            transition-all
                            duration-300
                            ${
                                desktopDot === dot
                                    ? "bg-red-600"
                                    : "bg-slate-400"
                            }
                        `}
                    />

                ))}

            </div>
        </div>

        </section>
    );
}