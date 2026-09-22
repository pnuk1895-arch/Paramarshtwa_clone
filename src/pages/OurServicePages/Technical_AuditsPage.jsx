import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/TechnicalAudits.png"

export default function Technical_AuditsPage() {
  const data = {
    title: "Our Sectors",
    name: "Technical Audits/Independent Checking",
    image: image,
    content:
      "Technical audits and independent checking are processes used to assess the accuracy, compliance, and functionality of systems, designs, or operations. A technical audit involves a detailed review of technical aspects of a project, such as engineering designs, software, or operational processes, to ensure they meet established standards and requirements. It aims to identify potential issues, inefficiencies, or non-compliance with regulations. Independent checking, often performed by a third-party expert, involves validating the work of another party, such as an engineer or contractor. This check ensures that designs, calculations, and implementations are sound, reducing the risk of errors or failures.",
  }
  const Page = {
    Category: "Our Services",
    name: "Technical Audits/Independent Checking"
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
