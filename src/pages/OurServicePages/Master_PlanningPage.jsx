import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/MasterPlanning.png"
import Icons from "../../component/CommonComponents/icons/Icons"

const Master_PlanningPage = () => {
  const data=  {
      title:"Our Sectors",
      name: "Master Planning",
      image: image,
      content:
        "Master planning is a comprehensive approach to the long-term development and design of a specific area, such as a city, community, or large-scale project. It involves creating a strategic framework that outlines land use, infrastructure, transportation, housing, commercial spaces, public amenities, and environmental considerations. The goal is to ensure sustainable growth, efficient resource use, and a high quality of life for residents and businesses. Master planning typically includes zoning regulations, environmental impact assessments, and community input to address current needs while anticipating future demands.",
    }
    const Page ={
    Category:"Our Services",
    name:"Master Planning"
  }
  return (
    <>
      <Header/>
      <main>
        <HeroSection Page={Page} />
        <CommonLayout data={data} />
        <Icons/>
      </main>
      <Footer/>
    </>
  )
}

export default Master_PlanningPage