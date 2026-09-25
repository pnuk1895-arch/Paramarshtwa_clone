import { FaCheck } from "react-icons/fa";

const ConstructionManagementComponent = () => {

     const constructionLeft = [
    "Survey and soil investigation",
    "Land acquisition and R&R plan",
    "Posting of Project Manager and nucleus site organization",
    "Site leveling",
    "Approach road, plant roads and drains",
    "Procurement of cement and steel",
  ];

  const constructionRight = [
    "Construction power and water",
    "Construction equipments",
    "Construction offices, storage sheds",
    "Transit camp / guest home",
    "Boundary wall, gate & fencing",
    "Communication facilities",
    "Construction of township & facilities",
  ];

  
  return (
     <section className="bg-white py-12 sm:py-16 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-6xl ">
    
              <h2 className="text-3xl font-bold font-Montserrat text-slate-900 sm:text-4xl lg:text-4xl">
                Construction Management
              </h2>
    
              <p className="mt-12 text-sm leading-7 text-slate-500 sm:text-base">
                SCMG relies on state-of-the-art technology and data management apart
                from that the specialized concurrent engineering professionals who
                work in perfect collaboration to cut down on the time. SCMG strives
                to better the methodologies of construction to create world-class
                facilities for the clients to provide the best services
              </p>
    
              <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
    
                <div className="space-y-4">
                  {constructionLeft.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 text-sm font-semibold leading-6 text-slate-900"
                    >
                      <FaCheck className="mt-1.5 shrink-0 text-orange-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
    
                <div className="space-y-4">
                  {constructionRight.map((item, index) => (
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
    
              <p className="mt-8 text-sm leading-7 text-slate-500 sm:text-base">
                These activities start much before the placement of the main
                project. Award and proper schedules for the same are prepared for
                taking up these activities in a time bound manner
              </p>
    
            </div>
          </section>
  )
}

export default ConstructionManagementComponent