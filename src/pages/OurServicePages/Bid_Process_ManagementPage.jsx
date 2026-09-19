import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/BidProcess.png"

const data = {
  title: "Our Sectors",
  name: "Bid Process Management",
  image: image,
  content:
    "Bid process management is the systematic approach to overseeing the preparation, submission, and evaluation of bids for projects, typically in construction, procurement, or service contracts. It involves several stages, including defining project requirements, issuing bid invitations, and managing vendor submissions. The process ensures that all bids are assessed fairly and transparently. The key steps in bid process management include preparing detailed tender documents, evaluating proposals based on criteria like cost, quality, and timelines, and negotiating terms with selected bidders. Effective management helps ensure compliance with regulations, adherence to timelines, and the selection of the best value offer. Additionally, proper bid management minimizes risks, ensures transparency, and improves decision-making, ultimately leading to successful project execution and supplier relationships.",
}


const Bid_Process_ManagementPage = () => {
  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <CommonLayout data={data} />
      </main>
      <Footer/>
    </>
  )
}

export default Bid_Process_ManagementPage