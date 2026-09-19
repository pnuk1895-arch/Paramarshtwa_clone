import experienceImage from '../../assets/ExperienceImage.png'

export default function ExperienceArea() {
    return (
        <section className="w-full bg-slate-50 py-12 sm:py-16 lg:py-20">

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col">

                        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Experience Area
                        </h2>

                        <h3 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
                            Techniques for Outstanding Results
                        </h3>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                            We implement strategic planning, advanced engineering,
                            efficient procurement, risk management, cost optimization,
                            and cutting-edge technology to ensure seamless execution.
                        </p>

                        {/* EXPERIENCE CARDS */}
                        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">

                            {/* CARD 1 */}
                            <div className="flex min-h-56 flex-col items-center justify-center rounded-md bg-slate-900 p-6 text-center sm:min-h-60">

                                <h4 className="text-xl font-bold text-white sm:text-2xl">
                                    Project Planning
                                </h4>

                                <p className="mt-5 text-base leading-7 text-white">
                                    Ensuring every detail is considered designing
                                </p>

                            </div>

                            {/* CARD 2 */}
                            <div className="flex min-h-56 flex-col items-center justify-center rounded-md bg-slate-900 p-6 text-center sm:min-h-60">

                                <h4 className="text-xl font-bold text-white sm:text-2xl">
                                    Labor Preparation
                                </h4>

                                <p className="mt-5 text-base leading-7 text-white">
                                    A wonderful serenity has taken possession of my
                                    entire soul, like these sweet mornings of spring
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="overflow-hidden">

                        <img
                            src={experienceImage}
                            alt="Experience Area"
                            className=" h-60 w-140 object-cover sm:h-96 lg:h-100"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}