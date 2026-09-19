import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import Footer from "../../component/CommonComponents/footer"
import HeroSection from "../../component/CommonComponents/heroSection"
import Header from "../../component/CommonComponents/Header"
import image from "../../assets/OurServices/Feasibility.png"

const data={
  title:"Our Sectors",
  name:"Feasibility Studies",
  content:"Feasibility studies are assessments conducted to evaluate the viability of a project or initiative before it is undertaken. These studies analyze various factors such as technical, financial, legal, and operational aspects to determine whether a project is feasible and likely to succeed. The goal is to identify potential risks, costs, and benefits, ensuring that resources are allocated effectively. Feasibility studies typically include market research, cost analysis, environmental impact assessments, and risk management strategies. They are used in diverse fields, including business, construction, technology, and infrastructure development. By conducting a feasibility study, stakeholders can make informed decisions, avoid costly mistakes, and improve the likelihood of project success. Ultimately, it helps to ensure that a project is practical, sustainable, and beneficial in the long term.",
  image:image
}

const Feasibility_studiesPage = () => {
  return (
    <>
        <Header/>
        <main>
            <HeroSection/>
            <CommonLayout data={data}/>
        </main>
        <Footer/>
    </>
  )
}

export default Feasibility_studiesPage