import { FaCheck } from "react-icons/fa";

const PlanningSystemComponent = () => {

    const planningPoints = [
        "Project identification",
        "Project identification",
        "Site Clearance by MoEF",
        "Commitment for land, water and fuel",
        "Authorization under section B 18 (A) of E (S) Act by MoEF",
        "Green Building Parameters",
    ];
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-16">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-6xl text-center">

                    <h2 className="text-3xl font-bold font-Montserrat uppercase leading-tight text-slate-900 sm:text-4xl lg:text-4xl">
                        Building A Strong Through Systematic Presence
                        <br />
                        Planning System & Control
                    </h2>

                </div>


                <div className="mt-16">

                    <p className="text-sm leading-7 text-slate-500 sm:text-base">
                        Planning for a project commences much earlier to the investment
                        approval. Planning, monitoring and control during this period are
                        of paramount importance for a project to see the light of the day.
                    </p>

                    <p className="mt-1 text-sm leading-7 text-slate-500 sm:text-base">
                        The planning stages for a typical project are as follows:
                    </p>


                    <div className="mt-8 space-y-5">

                        {planningPoints.map((item, index) => (
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
        </section>
    )
}

export default PlanningSystemComponent