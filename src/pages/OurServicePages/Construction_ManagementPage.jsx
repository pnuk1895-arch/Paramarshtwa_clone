import Footer from "../../component/CommonComponents/footer";
import Header from "../../component/CommonComponents/Header";
import HeroSection from "../../component/CommonComponents/heroSection";
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout";


export default function Construction_ManagementPage(){

  const data = {
    title:"Our Sectors",
    name: "Construction Management",
    image: '',
    content:
      "Construction management is the process of overseeing and coordinating a construction project from start to finish. It involves managing all aspects of the project, including planning, design, budgeting, scheduling, and procurement. A construction manager works closely with architects, engineers, contractors, and subcontractors to ensure that the project is completed on time, within budget, and to the required quality standards. Construction management involves tasks like risk management, quality control, and ensuring safety protocols are followed on-site. The manager is also responsible for resolving issues that arise during construction, coordinating materials, and monitoring progress.",
  }

  return (
  <>
  <Header/>
  <main>
    <HeroSection/>
    <CommonLayout data={data} />
  </main>
  <Footer/>
  </>
  )
}
