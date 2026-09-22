import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/Contract.png"

const Contract_DocumentationPage = () => {

  const data = {
    title: "Our Sectors",
    name: "Contract Documentations",
    image: image,
    content:
      "Contract documentation refers to the collection of written agreements, specifications, and legal documents that define the terms, conditions, and obligations of all parties involved in a project or contract. These documents ensure clarity and provide a framework for managing the relationship between clients, contractors, suppliers, and other stakeholders. Key components of contract documentation include the contract itself, project specifications, drawings, terms of payment, scope of work, timelines, and performance standards. It also includes any legal clauses related to dispute resolution, warranties, penalties, and insurance. Contract documentation helps minimize misunderstandings, ensures compliance with regulations, and provides a reference for resolving conflicts. Properly prepared and detailed documentation is crucial to the successful execution of a project, safeguarding both parties' interests and ensuring smooth operations.",
  }
  const Page = {
    Category: "Our Services",
    name: "Contract Documentations"
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

export default Contract_DocumentationPage
