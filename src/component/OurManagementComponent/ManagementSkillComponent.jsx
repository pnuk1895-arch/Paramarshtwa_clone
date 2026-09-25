import { FaCheck } from "react-icons/fa";
import skills from '../../assets/OurManagementImage/ManagementSkill.png'

const ManagementSkillComponent = () => {

    const managementSkills = [
    "Appropriate Site Selection",
    "Development of a sound infrastructure base before project take-off",
    "In-house engineering competency",
    "Comprehensive quality assurance system",
    "Established procurement procedures and material tracking / expediting",
    "Performance budgeting system",
    "Timely placement of key personnel",
    "Sound human resource development system",
    "Comprehensive rehabilitation and resettlement management for local population",
    "Audio Video Conferencing",
  ];

  
  return (
     <section className="bg-slate-50 py-12 sm:py-16 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-6xl ">
    
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
    
                <div>
    
                  <h2 className="text-3xl font-bold font-Montserrat text-slate-900 sm:text-4xl lg:text-4xl">
                    Management Skill
                  </h2>
    
                  <p className="mt-12 text-sm text-slate-500 sm:text-base">
                    Key factors for successful implementation
                  </p>
    
                  <div className="mt-7 space-y-4">
    
                    {managementSkills.map((item, index) => (
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
    
                <div className="overflow-hidden">
                  <img
                    src={skills}
                    alt="Management skill"
                    className="h-auto w-full object-cover"
                  />
                </div>
    
              </div>
    
            </div>
          </section>
  )
}

export default ManagementSkillComponent