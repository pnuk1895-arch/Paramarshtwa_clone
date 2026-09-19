import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"

export default function Post_Contract_EvalutionPage() {

  const data = {
    title: "Our Sectors",
    name: "Post-Contract Evaluation",
    image: '',
    content:
      "Post-contract evaluation is the process of assessing a project or contract after its completion to analyze its success and identify areas for improvement. This evaluation examines factors such as project performance, adherence to timelines, quality of work, budget compliance, and stakeholder satisfaction. It involves reviewing both the contract's terms and the actual outcomes, providing valuable insights into the efficiency of the project management process.",
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
