import { FaCheck } from "react-icons/fa";

const ModernizedProjectsManagement = () => {

    const valueEngineering = [
        "VE budgeting module",
        "CM/MC Project management module",
        "Mutual benefits module",
    ];

    const compliantValue = [
        "Comply material and system specifications",
        "Comply by equivalent Brand based on vendor list from specifications",
        "Comply by equivalent manufacturer based on same brand",
    ];

    const standardRegulations = [
        "Following standard regulations",
        "Modernized products technology",
        "Discussion and approval from owner & CM/MC",
    ];

    return (
        <section className="bg-slate-50 py-12 sm:py-16 lg:py-16">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl font-bold font-Montserrat text-slate-900 sm:text-4xl lg:text-4xl">
                    Modernized Projects Management
                </h2>

                <p className="mt-12 text-sm uppercase text-slate-500">
                    Value Engineering Work
                </p>

                <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">

                    {/* Column 1 */}

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Compliant Value
                        </h3>

                        <div className="mt-7 space-y-5">
                            {compliantValue.map((item, index) => (
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


                    {/* Column 2 */}

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Compliant Value
                        </h3>

                        <div className="mt-7 space-y-5">
                            {standardRegulations.map((item, index) => (
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


                    {/* Column 3 */}

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Value Engineering Management
                        </h3>

                        <div className="mt-7 space-y-5">
                            {valueEngineering.map((item, index) => (
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

export default ModernizedProjectsManagement