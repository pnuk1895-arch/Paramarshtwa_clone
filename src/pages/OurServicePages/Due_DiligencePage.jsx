import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/DueDiligence.png"
import Icons from "../../component/CommonComponents/icons/Icons"

const Due_DiligencePage = () => {

  const data = {
    title: "Our Sectors",
    name: "Due Diligence",
    image: image,
    content:
      "Due diligence is the process of thoroughly investigating and evaluating a business, project, or individual before entering into an agreement or transaction. It is commonly used in mergers, acquisitions, investments, and partnerships to assess risks, verify information, and ensure that all aspects are transparent and accurate. The due diligence process includes reviewing financial records, legal documents, contracts, operations, intellectual property, and compliance with regulations. It may also involve evaluating market conditions, potential liabilities, and any environmental or social impacts. By conducting due diligence, stakeholders can make informed decisions, identify potential risks, and avoid costly mistakes. Ultimately, it helps ensure that all parties are fully aware of the situation, protecting both their investments and interests in the long run.",
  }
  const Page = {
    Category: "Our Services",
    name: "Dur Diligence"
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

export default Due_DiligencePage