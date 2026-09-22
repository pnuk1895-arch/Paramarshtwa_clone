import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurSectors/CommonLayout"
import Sewage_And_Drainage from "../../assets/OurSectors/Sewage&Drainage.png"

export default function S_AND_DPage() {
  const data = {
    title: "Our Sectors",
    name: "Sewage And Drainage",
    content: "Sewage and drainage systems are vital components of urban infrastructure that manage wastewater and stormwater. Sewage systems collect and transport waste from homes, industries, and public facilities to treatment plants, where it is cleaned before being released or reused. Proper sewage management prevents contamination of water sources and reduces the spread of diseases. Drainage systems handle excess rainwater and prevent flooding by directing stormwater away from streets, homes, and buildings. These systems include gutters, drains, and culverts designed to efficiently channel water to rivers or reservoirs.",
    image: Sewage_And_Drainage
  }
  const Page = {
    Category: "Our Sectors",
    name: "Sewage And Drainage"
  }
  return (
    <>
      <Header />
      <main>
        <HeroSection Page={Page} />
        <CommonLayout data={data} />
      </main>
      <Footer />
    </>
  )
}
