import { Link } from 'react-router-dom';
import heroImage from '../../assets/teamWorkImage.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      <div className="sticky top-0 -z-20 w-full overflow-hidden h-104 md:h-140 lg:h-120 transition-all duration-500 ease-in-out">
        <img
          src={heroImage}
          alt="Hero"
          className="h-full w-full scale-x-145 object-cover object-top max-md:scale-y-120 md:scale-x-125 max-lg:translate-y-16 lg:scale-x-130 transition-transform duration-700 ease-out will-change-transform"
        />
      </div>

      <div className="
  w-full
  max-w-6xl
  h-20 
  absolute    
  flex 
  justify-between 
  items-center 
  text-white 
  font-poppins 
  left-1/2
  -translate-x-1/2
  px-12
  top-52
  md:top-84
  lg:top-64
  max-sm:flex-col
  max-sm:items-start
  max-sm:gap-3
  transition-all
  duration-500
  ease-in-out
">
        <div className="flex flex-col justify-start items-start gap-4 transition-all duration-300">
          <p className="text-base">Welcome to Paramarshtwa</p>
          <h2 className="sm:text-5xl text-4xl font-bold transition-all duration-300">About Us</h2>
        </div>
        <div className="flex justify-center items-center gap-2 text-xl font-medium">
          <Link to="/" className="transition-colors duration-200 hover:text-gray-200">Home</Link>
          <MdKeyboardArrowRight />
          <p>About Us</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

