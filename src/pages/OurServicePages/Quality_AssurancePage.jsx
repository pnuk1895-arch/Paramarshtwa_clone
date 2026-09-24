import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/QualityAssurance.png"
import Icons from "../../component/CommonComponents/icons/Icons"
export default function Quality_AssurancePage() {

  const data = {
    title: "Our Sectors",
    name: "Quality Assurance",
    image: image,
    content:
      "Quality assurance (QA) is a systematic process designed to ensure that a product, service, or system meets specified requirements and standards throughout its development and delivery. It involves monitoring, evaluating, and improving processes to prevent defects and ensure consistent quality. QA encompasses various activities, such as testing, inspections, audits, and process reviews, to verify that products or services meet customer expectations and regulatory requirements. In industries like manufacturing, construction, and software development, quality assurance helps prevent costly errors, delays, and rework by identifying issues early in the process.",
  }
  const Page = {
    Category: "Our Services",
    name: "Quality Assurance"
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
