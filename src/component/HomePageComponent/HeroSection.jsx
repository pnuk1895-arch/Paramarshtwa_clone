import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import heroImage from '../../assets/heroImage/heroImage1.png'

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Hero Image */}
      <div className="ml-auto h-auto ">
        <img
          src={heroImage}
          alt="Construction professionals working on a project"
          className="
            block
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
          "
        />
      </div>

      {/* Carousel Dots */}
      <div
        className="
          absolute
          right-4
          top-1/2
          flex
          -translate-y-1/2
          flex-col
          items-center
          gap-3

          sm:right-5
          md:right-6
          lg:right-8
        "
      >

        {/* Active Dot */}
        <Link
          to="#"
          aria-label="Slide 1"
          className="
            flex
            h-4
            w-4
            items-center
            justify-center
            rounded-full
            border-2
            border-orange-500
            bg-white
          "
        >
          <FaCircle className="text-[0.45rem] text-orange-500" />
        </Link>

        {/* Dot */}
        <Link
          to="#"
          aria-label="Slide 2"
          className="
            flex
            h-4
            w-4
            items-center
            justify-center
            rounded-full
            bg-white
          "
        >
          <FaCircle className="text-[0.45rem] text-white" />
        </Link>

        {/* Dot */}
        <Link
          to="#"
          aria-label="Slide 3"
          className="
            flex
            h-4
            w-4
            items-center
            justify-center
            rounded-full
            bg-white
          "
        >
          <FaCircle className="text-[0.45rem] text-white" />
        </Link>

      </div>

    </section>
  );
};

export default HeroSection;