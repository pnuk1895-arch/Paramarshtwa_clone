import { FaCheck } from "react-icons/fa";
import BIMimage from '../../assets/OurManagementImage/bimModeling.png'

const BimModelingComponent = () => {

    const bimPoints = [
        "Improving planning & co-ordination among peers-reducing risk & errors",
        "Eliminating discrepancies & interferences",
        "Working out accurate bill of quantities",
    ];


    return (
        <section className="bg-slate-50 py-12 sm:py-16 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-6xl ">

                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">

                    {/* Images */}

                    <div className="lg:col-span-4 h-130 mb-8">
                            <img
                                src={BIMimage}
                                alt="3D BIM model"
                                className=" w-full object-contain h-142"
                            />
                    </div>
                    {/* Content */}

                    <div className="lg:col-span-8 mt-10">

                        <h2 className="text-3xl font-Montserrat font-bold text-slate-900 sm:text-4xl lg:text-4xl">
                            3D BIM Modeling Virtual Platform
                        </h2>

                        <p className="mt-12 text-sm leading-7 text-slate-500 sm:text-base">
                            Since the inception of Space Combine, almost two decades ago,
                            the people at this architectural firm have been looking at
                            architecture from a holistic perspective The architectural firm
                            takes the responsibility of Space Combine Management Group
                            (SCMG)
                        </p>

                        <div className="mt-8 space-y-4">

                            {bimPoints.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 text-sm font-semibold leading-6 text-slate-900"
                                >
                                    <FaCheck className="mt-1.5 shrink-0 text-orange-600" />
                                    <span>{item}</span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default BimModelingComponent

                   

                    

