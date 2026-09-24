import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/TestingAndCommissioning.png"
import Icons from "../../component/CommonComponents/icons/Icons"

export default function Testing_And_CommissioningPage() {
  const data = {
    title: "Our Sectors",
    name: "Testing And Commissioning",
    image: image,
    content:
      "Testing and commissioning is the process of verifying and validating the performance of equipment, systems, or projects to ensure they meet specified requirements and function correctly before being put into operation. Testing involves examining individual components or systems to check for quality, safety, and functionality, while commissioning ensures that all systems work together as intended.",
  }
  const Page = {
    Category: "Our Services",
    name: "Testing And Commissioning"
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
