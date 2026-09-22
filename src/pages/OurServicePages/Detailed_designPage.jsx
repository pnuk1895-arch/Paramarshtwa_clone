import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"

const Detailed_designPage = () => {
  const data={
    title:"Our Sectors",
    name: "Detailed Design",
    image: '',
    content:
      "Detailed design is the phase in the design process where concepts and preliminary plans are refined into precise, actionable blueprints or specifications for construction or implementation. It focuses on the specifics of how a project will be built, ensuring all components, materials, systems, and processes are clearly defined and coordinated. In architecture and engineering, detailed design includes structural, electrical, mechanical, and plumbing plans, along with material selection, dimensions, and construction techniques. It also involves addressing technical requirements, safety standards, and regulatory compliance. Detailed design is critical to ensuring that the project is practical, cost-effective, and executable, while meeting performance and aesthetic goals. This stage provides contractors and builders with the information needed to carry out the construction phase efficiently and accurately.",
  }
  const Page ={
    Category:"Our Services",
    name:"Detailed Design"
  }
  return (
     <>
      <Header/>
      <main>
        <HeroSection Page={Page}/>
        <CommonLayout data={data} />
      </main>
      <Footer/>
    </>
  )
}
 export default Detailed_designPage