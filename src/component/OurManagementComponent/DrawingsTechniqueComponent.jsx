import { FaCheck } from "react-icons/fa";
import Drawing from '../../assets/OurManagementImage/drawings.png'

const DrawingsTechniqueComponent = () => {

    const drawingPoints = [
        "Co-ordinate All Related Drawings – Architecture, Civil, Structure, MEP, other",
        "Details Drawings – Typical Details, Mock up room, Plant Room",
        "Method of Statement – From engineering level through working team",
        "Material/Manpower Profile – Control Program",
        "Daily Record and Effective Schedule Plan",
        "Internal Network Site Communication – Personally PDA for SMS/MMS/",
        "Telephone to Network Computerized Center",
        "Planning Co-ordination Center",
        "Record/Report/Adjustment in actual status",
        "Variation Work – Really reflected the project status to all concerned parties",
    ];

    return (
        <section className="bg-slate-50 py-12 sm:py-16 lg:py-16 h-auto">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">

                    {/* Content */}

                    <div className="lg:col-span-7">

                        <h2 className="text-3xl font-bold font-Montserrat text-slate-900 sm:text-4xl lg:text-4xl">
                            3-D Drawings Technique –
                        </h2>

                        <p className="mt-12 text-sm uppercase text-slate-500">
                            Autodesk Lewitt 3D
                        </p>

                        <div className="mt-8 space-y-4">

                            {drawingPoints.map((item, index) => (
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


                    {/* Images */}

                    <div className="lg:col-span-5 h-130 ">
                            <img
                                src={Drawing}
                                alt="3D drawing"
                                className="w-full object-contain h-142"
                            />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default DrawingsTechniqueComponent

                        



                        