import { FaArrowRight, FaGlobe, FaEnvelope } from "react-icons/fa";
import teamImage from "../../assets/AboutImage/AboutImage.png";

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
        <section className="relative md:mb-22 lg:mb-18 w-full bg-slate-700">

            {/* ================= MAIN SECTION ================= */}

            <div className="grid w-full grid-cols-1 lg:grid-cols-2">

                {/* ================= IMAGE ================= */}

                <div className="h-full min-h-80 lg:min-h-160">
                    <img
                        src={teamImage}
                        alt="Join our team"
                        className="h-full w-full object-cover"
                    />
                </div>


                {/* ================= CONTENT ================= */}

                <div className="flex flex-col justify-center px-6 py-22 sm:px-10 sm:py-22 lg:px-8 lg:py-22 xl:px-12">

                    {/* Small heading */}

                    <p className="text-sm font-medium text-amber-500 sm:text-base">
                        Join Our Team
                    </p>


                    {/* Main heading */}

                    <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
                        We Want To Be A Part Of Our Team?
                    </h2>


                    {/* ================= JOBS ================= */}

                    <div className="mt-8 flex flex-col gap-7 sm:mt-10 sm:gap-8">

                        {jobs.map((job) => (
                            <div
                                key={job.title}
                                className="flex items-start gap-4"
                            >

                                {/* Arrow */}

                                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 text-amber-500 sm:h-6 sm:w-6">
                                    <FaArrowRight className="text-[9px] sm:text-[10px]" />
                                </div>


                                {/* Job content */}

                                <div className="min-w-0 flex-1">

                                    <h3 className="text-lg font-bold leading-tight text-white sm:text-xl xl:text-2xl">
                                        {job.title}
                                    </h3>

                                    <p className="mt-2 w-full text-sm leading-6 text-white sm:text-base sm:leading-7">
                                        {job.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>


            {/* ================= CONTACT BOX ================= */}

            <div
                className="
                absolute
                left-1/2
                bottom-0
                z-30
                grid
                w-11/12
                max-w-6xl
                -translate-x-1/2
                translate-y-1/2
                grid-cols-1
                overflow-hidden
                rounded-[80px]
                border-4
                border-white
                bg-orange-600
                shadow-xl
                md:grid-cols-2
                max-md:invisible
            "
            >
                {/* ADDRESS */}
                <div
                    className="
            flex
            items-center
            justify-start
            gap-6
            px-8
            py-7
            md:px-10
        "
                >
                    <div
                        className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                text-2xl
                text-white
            "
                    >
                        <FaGlobe />
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-2xl font-bold text-white">
                            Address
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-white lg:text-base">
                            Astralis, 1407, 14th floor, Paramarshtwa
                            Supernova New Delhi
                        </p>
                    </div>
                </div>

                {/* CONTACT */}
                <div
                    className="
            flex
            items-center
            justify-start
            gap-6
            border-t
            border-white/70
            px-8
            py-7
            md:border-l
            md:border-t-0
            md:px-10
        "
                >
                    <div
                        className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                text-2xl
                text-white
            "
                    >
                        <FaEnvelope />
                    </div>

                    <div className="min-w-0">
                        <p className="text-sm font-medium text-white lg:text-base">
                            info@paramarshtwa.in
                        </p>

                        <a
                            href="tel:+919999997869"
                            className="mt-2 block text-sm font-medium text-white lg:text-base"
                        >
                            +91 99999 97869
                        </a>
                    </div>
                </div>
            </div>


        </section>
    );
}

