import { FaCheck } from "react-icons/fa";

const NewFaceOfProjectManagement = () => {

  const projectAreas = [
    "Academia All World of Education from Pre-School to Universities, Institute & Research Centre etc.",
    "Airports & Aerodome Runways",
    "Waterways, River Dredging & connecting River PanIndian sub continent.",
    "Power plants (Geo, Hydro, Nuclear, Wind & Solar)",
    "Ports and Dams",
    "Leisure, Recreation & Entertainments",
  ];

  const projectAreasRight = [
    "Well-Being and hospital and R&D Institutes",
    "Hospitality",
    "Corporate Neighbourhood",
    "Highways with or without fringes of habitational other Growth",
    "Industries with Intermediatory SEZ, Mid Towns & their functionalities",
    "Other Business Activities Centers",
  ];

  
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-10">
            <div className="mx-auto w-full max-w-7xl  px-4 sm:px-6 lg:px-8">
    
              <h1 className="text-3xl font-bold font-Montserrat leading-tight text-slate-900 sm:text-4xl lg:text-4xl">
                New Face Of Projects Management
              </h1>
    
              <div className="mt-10 space-y-1 text-sm leading-6 text-slate-500 sm:text-base">
    
                <p>
                  SCMG focuses on a larger spectrum of achievements through their
                  efficient project management. SCMG works hard as a catalyst of
                  uptrend and strategically to energies the economy through Realty.
                </p>
    
                <p>
                  Through SCMG's novel approach and schematic management ideas,
                  it is ever ready to face any new challenges that arises.
                </p>
    
                <p>
                  Infrastructure is a holistic pre-requisite for development;
                  SCMG strives to provide the best to the all users.
                </p>
    
                <p>
                  This approach certainly gives Residential & Commercials and
                  other following sectors new dimensions to SCMG's management
                  approach.
                </p>
    
              </div>
    
              <div className="mt-7 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
    
                <div className="space-y-4">
                  {projectAreas.map((item, index) => (
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
                  {projectAreasRight.map((item, index) => (
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

export default NewFaceOfProjectManagement