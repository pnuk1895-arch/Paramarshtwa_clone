import { FaCheck } from "react-icons/fa";
import planning1 from '../../assets/OurManagementImage/Planning1.png'
import planning2 from '../../assets/OurManagementImage/Planning2.png'
import planning3 from '../../assets/OurManagementImage/Planning3.png'

const PlanningArchitectureComponent = () => {

    const sectors = [
    "Building",
    "Residential",
    "Commercial",
    "Education, Institutional",
    "Health Care",
    "Hotels and Resorts",
    "IT and IT enabled",
    "Retail",
    "Environmental",
    "Industrial/SEZ",
    "Sewerage and Drainage",
    "Sports Complexes",
    "Transport",
    "MRT/LRT",
    "Railways",
    "Highways and Bridges",
    "Urban Infrastructure",
    "Urban Land Development",
    "Urban Renewal",
    "Water Supply & Sanitation",
    "Aviation",
  ];

  const services = [
    "Feasibility studies",
    "Project Management",
    "Master planning",
    "Architecture",
    "Detailed design",
    "Value engineering",
    "Contract documentations",
    "Due diligence",
    "Energy audits",
    "Proof checking",
    "Technical audits/Independent Checking",
    "Bid process management",
    "Construction management",
    "Contract administration",
    "Post-contract evaluation",
    "Quality assurance",
    "Statutory inspections",
    "Asset management",
    "Training",
    "Capacity building",
    "Testing and commissioning",
  ];

  
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-16">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    
              <h2 className="mx-auto max-w-5xl font-Montserrat text-center text-3xl font-bold uppercase leading-tight text-slate-900 sm:text-4xl lg:text-4xl">
                Planning Architecture Integrated Engineering
                <br />
                Project Management Solutions
              </h2>
    
              <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
    
                {/* Sectors */}
    
                <div>
    
                  <h3 className="text-base font-bold uppercase text-slate-500">
                    Sectors
                  </h3>
    
                  <div className="mt-7 space-y-4">
                    {sectors.map((item, index) => (
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
    
    
                {/* Services */}
    
                <div>
    
                  <h3 className="text-base font-bold uppercase text-slate-500">
                    Services
                  </h3>
    
                  <div className="mt-7 space-y-4">
                    {services.map((item, index) => (
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
    
    
              {/* Three image strip */}
    
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
    
                <div className="overflow-hidden group relative">
                  <img
                    src={planning1}
                    alt="Project management"
                    className="h-auto w-full object-cover transition-transform duration-300 ease-in group-hover:rotate-5 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
    
                <div className="overflow-hidden group relative">
                  <img
                    src={planning2}
                    alt="Project management planning"
                    className="h-auto w-full object-cover transition-transform duration-300 ease-in group-hover:rotate-5 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
    
                <div className="overflow-hidden group relative">
                  <img
                    src={planning3}
                    alt="Construction management"
                    className="h-auto w-full object-cover transition-transform duration-300 ease-in group-hover:rotate-5 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
    
              </div>
    
            </div>
          </section>
  )
}

export  default PlanningArchitectureComponent