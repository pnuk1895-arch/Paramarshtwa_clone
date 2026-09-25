import { FaCheck } from "react-icons/fa";
import CoreDesign from '../../assets/OurManagementImage/CoreDesign.png'
import CoreDesign2 from '../../assets/OurManagementImage/CoreDesign2.png'
import CoreDesign3 from '../../assets/OurManagementImage/CoreDesign3.png'

const TheCoreDesign = () => {

    const coreDesignPoints = [
        "Preparation of a comprehensive list of engineering activities",
        "Scheduling of engineering activities at L2 level within the time frame of master network (MNW)",
        "Scheduling of drawings / data submission by contractor and approvals",
        "Releasing construction drawings to site",
    ]

    return (
        <section className="bg-slate-50 py-12 sm:py-16 lg:py-16  px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-6xl">

                <div className="text-center">

                    <h2 className="text-3xl font-bold font-Montserrat uppercase text-slate-900 sm:text-4xl lg:text-4xl">
                        The Core Design
                    </h2>

                    <p className="mt-7 text-sm uppercase text-slate-700 sm:text-base">
                        Engineering Modernizations & Upgradation
                    </p>

                </div>


                <div className="mx-auto mt-16 max-w-6xl">

                    <div className="space-y-5">

                        {coreDesignPoints.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 text-sm font-semibold leading-6 text-slate-900 sm:text-base"
                            >
                                <FaCheck className="mt-1.5 shrink-0 text-orange-600" />
                                <span>{item}</span>
                            </div>
                        ))}

                    </div>


                    {/* Three images */}

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 ">
                        <div className="group relative overflow-hidden">
                            <img
                                src={CoreDesign}
                                alt="Core design"
                                className="h-auto w-full object-cover transition-transform duration-300 ease-in group-hover:rotate-5 group-hover:scale-110 "
                            />
                            <div className="absolute inset-0 bg-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="group relative overflow-hidden">
                            <img
                                src={CoreDesign2}
                                alt="Core design"
                                className="h-auto w-full object-cover transition-transform duration-300 ease-in group-hover:rotate-5 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="group relative overflow-hidden">
                            <img
                                src={CoreDesign3}
                                alt="Core design"
                                className="h-auto w-full object-cover transition-transform duration-300 ease-in group-hover:rotate-5 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default TheCoreDesign 