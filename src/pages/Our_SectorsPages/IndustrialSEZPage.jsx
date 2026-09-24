import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import Icons from "../../component/CommonComponents/icons/Icons"
import CommonLayout from "../../component/CommonComponents/OurSectors/CommonLayout"

export default function IndustrialSEZPage() {
  const data = {
    title: "Our Sectors",
    name: "Industrial/SEZ",
    content: "Industrial zones and Special Economic Zones (SEZs) are designated areas aimed at boosting economic development through industrial growth and foreign investment. Industrial zones are areas where factories and manufacturing facilities are concentrated to facilitate production, improve infrastructure, and increase efficiency. These zones often have dedicated services, such as power supply, waste management, and transportation networks, tailored to industrial needs. SEZs, on the other hand, are regions where business and trade laws are more liberal, offering tax incentives, reduced tariffs, and other benefits to attract foreign companies and investors.",
    image: ''
  }

  const Page = {
    Category: "Our Sectors",
    name: "Industrial/SEZ"
  }
  return (
    <>
      <Header />
      <main>
        <HeroSection Page={Page} />
        <CommonLayout data={data} />
        <Icons/>
      </main>
      <Footer />
    </>
  )
}
