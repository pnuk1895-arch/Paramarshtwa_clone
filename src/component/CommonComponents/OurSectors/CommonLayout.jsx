import { Link } from "react-router-dom"

const Services = [
    ["/Urban_Infrastructure", "Urban Infrastructure"],
    ["/UrbanLandDevelopment", "Urban Land Development"],
    ["/UrbanRenewal", "Urban Renewal"],
    ['/Environmental', "Environmental"],
    ["/IndustrialSEZ", "Industrial/SEZ"],
    ["/sewage_And_Drainage", "Sewage And Drainage"],
    ['/water_supply_And_sanitation', "Water Supply & Sanitation"],
    ["/SportComlpexes", "Sport Complexes"],
    ["/Aviation", "Aviation"],
]

const CommonLayout = ({ data }) => {

    

    return (
        <section className="bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-10 xl:px-12 transition-all duration-500 ease-in-out">
            <div className=" mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3 transition-all duration-500 ease-in-out">
                {/* Left Main Content */}
                <div className="group col-span-1 lg:col-span-2 flex flex-col transition-all duration-500 ease-in-out">
                    <div className=" relative overflow-hidden">
                        <img
                            src={data.image}
                            alt={data.name || ''}
                            className="w-full object-cover object-center transition-transform duration-600 group-hover:scale-105 will-change-transform"
                        />
                        <div className="absolute inset-0 invisible transition-all group-hover:visible bg-red-400 opacity-40  "> 
                        </div>
                    </div>
                    <div className="border-2 border-gray-200 px-8 py-10 transition-all duration-300 ease-in-out">
                        <h3 className="text-xl font-bold text-gray-700 mb-2 transition-colors duration-300">
                            {data.name}
                        </h3>
                        <p className="text-gray-500 text-base leading-7 transition-opacity duration-300">
                            {data.content}
                        </p>
                    </div>
                </div>

                {/* Right Sidebar */}
                <aside className="h-auto w-full border-t-2 border-red-400 py-8 px-3 flex justify-center transition-all duration-500 ease-in-out">
                    <div className="w-full">
                        <h1 className="text-2xl font-extralight transition-colors duration-300">
                            {data.title}
                        </h1>
                        <div className="mt-6 w-full">
                            <ul className="flex flex-col ">
                                {Services.map(([Path, Name], index) => (
                                    <li key={index}>
                                        <Link
                                            to={Path}
                                            className="border-2 border-gray-200 block px-8 py-4 text-gray-600 text-base transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white will-change-transform"
                                        >
                                            {Name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}
export default CommonLayout