import { FaArrowRight, FaGlobe, FaEnvelope } from "react-icons/fa";
import teamImage from '../../assets/AboutImage/AboutImage.png'

export default function JoinOurTeam() {
    const jobs = [
        {
            title: "Business Development Manager",
            description:
                "Organized and well-connected Business Development Manager focused on solution selling to build trusted relationships with companies.",
        },
        {
            title: "Project Lead",
            description:
                "We are home to a team of smart, driven consultants and leaders who come to work every day to think, grow, and achieve.",
        },
        {
            title: "Business Solutions Analyst",
            description:
                "Consulting provide a hybrid of business and strategy acumen paired with the know-how to execute even tough client problems.",
        },
    ];

    return (
        <section className="w-full bg-slate-700 h-180 mb-24 relative">

            {/* MAIN SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* IMAGE */}
                <div className="h-80 sm:h-96 lg:h-[103%] lg:min-h-96">
                    <img
                        src={teamImage}
                        alt="Join our team"
                        className="h-full w-full object-cover"
                    />
                </div>


                {/* CONTENT */}
                <div className="px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-16 xl:px-16">

                    {/* SMALL TITLE */}
                    <p className="text-base font-medium text-amber-500 sm:text-lg">
                        Join Our Team
                    </p>


                    {/* MAIN TITLE */}
                    <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        We Want To Be A Part Of Our Team?
                    </h2>


                    {/* JOB LIST */}
                    <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12">

                        {jobs.map((job) => (
                            <div
                                key={job.title}
                                className="flex gap-4 sm:gap-5"
                            >

                                {/* ARROW ICON */}
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 text-amber-500 sm:h-7 sm:w-7">
                                    <FaArrowRight className="text-xs" />
                                </div>


                                {/* JOB CONTENT */}
                                <div className="flex-1">

                                    <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                                        {job.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-white sm:text-base sm:leading-7">
                                        {job.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>


            {/* CONTACT BOX */}
            <div className="absolute left-50 -bottom-22 z-3 grid grid-cols-1 overflow-hidden rounded-3xl border-4 border-white bg-orange-600 max-md:hidden  lg:max-w-6xl lg:grid-cols-2 lg:rounded-full">

                {/* ADDRESS */}
                <div className="flex items-center gap-5 p-6 sm:p-8 lg:px-10 lg:py-7">

                    {/* ICON */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white text-2xl text-white sm:h-20 sm:w-20">
                        <FaGlobe />
                    </div>

                    {/* TEXT */}
                    <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                            Address
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white sm:text-base">
                            Astralis, 1407, 14th floor, Paramarshtwa
                            Supernova New Delhi
                        </p>
                    </div>

                </div>


                {/* CONTACT */}
                <div className="flex items-center gap-5 border-t border-white p-6 sm:p-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-7">

                    {/* ICON */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white text-2xl text-white sm:h-20 sm:w-20">
                        <FaEnvelope />
                    </div>

                    {/* TEXT */}
                    <div>
                        <p className="text-sm font-medium text-white sm:text-base">
                            info@paramarshtwa.in
                        </p>

                        <p className="mt-2 text-sm font-medium text-white sm:text-base">
                            +91 99999 97869
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}