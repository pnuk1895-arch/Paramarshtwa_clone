import { FaCheck } from "react-icons/fa";

const FutureOfSCMG = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-16  px-4 sm:px-6 md:px8 lg:px-10">
            <div className="mx-auto w-full max-w-6xl">
    
              <div className="mx-auto max-w-6xl text-center">
    
                <h2 className="text-3xl font-bold font-Montserrat text-slate-900 sm:text-4xl lg:text-4xl">
                  Future Of SCMG Redefined
                </h2>
    
                <div className="mt-8 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
    
                  <p>
                    At SCMG, the experienced professionals provide a unique and
                    complete understanding of how a project should be handled and
                    taken forward.
                  </p>
    
                  <p>
                    The company uses the best resources and up-to-date
                    responsibilities of knowledge to identify potential trouble
                    spots in a project, even before problems can develop and
                    proactively, recommends and initiates preventive actions through
                    their strategic planning
                  </p>
    
                </div>
    
              </div>
    
    
              <div className="mt-16">
    
                <p className="text-sm uppercase text-slate-500">
                  Integrated Project Management and Control System (IPMCS) ? Three
                  control centers:
                </p>
    
                <div className="mt-7 space-y-5">
    
                  {[
                    "Engineering",
                    "Contracting",
                    "Inspection and expediting quality operations",
                  ].map((item, index) => (
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

export default FutureOfSCMG