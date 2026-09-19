import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurSectors/CommonLayout"
import UrbanImage from "../../assets/OurSectors/Urban_Infrastructure.png"

export default function UrbanInfrastructurePage() {
  const data = {
    title: "Our Sectors",
    name: "Urban Infrastructure",
    content: "Urban infrastructure refers to the essential systems and services that support the functioning of cities. It includes transportation networks (roads, bridges, public transit), utilities (water supply, sewage, electricity), communication systems (internet, telephone), and public facilities (hospitals, schools, parks). Well-developed infrastructure is crucial for maintaining the quality of life, economic growth, and sustainability in urban areas. Effective urban infrastructure ensures smooth mobility, access to basic services, and environmental sustainability. It also plays a key role in mitigating challenges such as congestion, pollution, and resource scarcity. As cities grow, there is a constant need for modernization and expansion of infrastructure to accommodate increasing populations and changing needs. Sustainable urban infrastructure is essential for creating resilient, livable, and efficient cities in the future.",
    image: UrbanImage
  }
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CommonLayout data={data} />
      </main>
      <Footer />
    </>
  )
}
