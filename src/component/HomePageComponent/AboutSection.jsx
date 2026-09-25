import { FaBullseye, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutImage from '../../assets/AboutImage/AboutImage.png'

export default function AboutSection() {
    return (
        <section className="w-full bg-slate-50 py-12 sm:py-16  lg:py-20">

            <div className="mx-auto w-full max-w-6xl">

                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 md:gap-8 lg:gap-12">

                    {/* Image */}
                    <div className="w-full">
                        <img
                            src={AboutImage}
                            alt="About Paramarshtwa"
                            className="h-auto w-full object-cover"
                        />
                    </div>


                    {/* Content */}
                    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0!">

                        {/* Heading */}
                        <h2 className="mb-8 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            About Our Company
                        </h2>


                        {/* Feature 1 */}
                        <div className="mb-8 grid grid-cols-12 gap-4 sm:gap-5">

                            {/* Icon */}
                            <div className="col-span-2 flex items-start justify-center pt-1 text-3xl text-amber-600 sm:text-4xl">
                                <FaBullseye />
                            </div>

                            {/* Text */}
                            <div className="col-span-10">
                                <h3 className="mb-2 text-xl font-bold leading-tight text-amber-600 sm:text-2xl">
                                    Strategic Planning & Execution
                                </h3>

                                <p className="text-base leading-7 text-slate-600 sm:text-lg">
                                    Strategic Planning & Execution ensures
                                    efficiency, risk mitigation, timely delivery,
                                    and seamless project management.
                                </p>
                            </div>

                        </div>


                        {/* Feature 2 */}
                        <div className="mb-8 grid grid-cols-12 gap-4 sm:gap-5">

                            {/* Icon */}
                            <div className="col-span-2 flex items-start justify-center pt-1 text-3xl text-amber-600 sm:text-4xl">
                                <FaCogs />
                            </div>

                            {/* Text */}
                            <div className="col-span-10">
                                <h3 className="mb-2 text-xl font-bold leading-tight text-amber-600 sm:text-2xl">
                                    Advanced Technology Integration
                                </h3>

                                <p className="text-base leading-7 text-slate-600 sm:text-lg">
                                    Advanced Technology Integration enhances
                                    efficiency, automation, precision,
                                    sustainability, and cost-effectiveness.
                                </p>
                            </div>

                        </div>


                        {/* Read More */}
                        <Link
                            to="/About_Us"
                            className="inline-flex items-center justify-center bg-linear-to-r from-red-600 to-orange-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:from-red-700 hover:to-orange-600 sm:px-10 sm:text-lg"
                        >
                            Read More
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}