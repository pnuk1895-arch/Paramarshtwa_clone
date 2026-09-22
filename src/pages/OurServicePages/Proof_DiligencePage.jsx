import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/ProofChecking.png"

export default function Proof_DiligencePage() {
  const data = {
    title: "Our Sectors",
    name: "Our Sectors",
    name: "Proof Checking",
    image: image,
    content:
      "Proof checking is the process of reviewing written content to identify and correct errors in grammar, spelling, punctuation, syntax, and formatting. It ensures that the document is clear, accurate, and consistent, making it ready for publication or submission. Proof checking is often the final step before finalizing a document, after it has been written and edited. The process involves carefully reading through the text to catch overlooked mistakes, such as typographical errors or inconsistencies. Proof checkers may also verify facts, numbers, or citations to ensure the content's accuracy. In addition to basic proofreading, proof checking also focuses on the overall flow and presentation of the document. Effective proof checking is essential in producing professional, polished, and error-free materials, whether for academic, business, or creative purposes.",
  }
  const Page = {
    Category: "Our Services",
    name: "Proof Checking"
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

