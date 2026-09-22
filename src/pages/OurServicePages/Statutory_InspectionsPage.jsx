import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/StatutoryInspections.png"

export default function Statutory_InspectionsPage() {
  const data = {
    title: "Our Sectors",
    name: "Statutory Inspections",
    image: image,
    content:
      "Statutory inspections are mandatory assessments required by law or regulation to ensure that equipment, buildings, and systems meet safety, health, and environmental standards. These inspections are typically scheduled at regular intervals and are conducted by qualified inspectors to verify compliance with legal requirements. They are common in industries such as construction, manufacturing, healthcare, and transportation. Examples of statutory inspections include checking pressure vessels, fire safety systems, electrical installations, and machinery. The goal is to identify potential hazards, ensure operational safety, and prevent accidents or failures that could harm people, property, or the environment.",
  }
  const Page = {
    Category: "Our Services",
    name: "Statutory Inspections"
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
