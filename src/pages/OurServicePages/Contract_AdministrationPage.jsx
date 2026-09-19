import image from '../../assets/OurServices/ContractAdministration.png'
import Footer from '../../component/CommonComponents/footer'
import Header from '../../component/CommonComponents/Header'
import HeroSection from '../../component/CommonComponents/heroSection'
import CommonLayout from '../../component/CommonComponents/OurServices/CommonLayout'

export default function Contract_AdministrationPage() {
  const data = {
    title: "Our Sectors",
    name: "Contract Administration",
    image: image,
    content:
      "Contract administration is the process of managing and overseeing the execution of a contract to ensure that all parties fulfill their obligations as agreed. It involves monitoring the progress of the project, ensuring compliance with terms and conditions, and addressing any issues or disputes that arise during execution. Contract administration includes managing documentation, reviewing change orders, ensuring timely payments, and maintaining communication between stakeholders. This process also involves tracking timelines, performance, and costs to ensure the project stays within scope and budget.",
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
