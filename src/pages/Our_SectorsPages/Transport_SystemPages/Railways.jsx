import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import Railways from "../../../assets/Transport_systems/Railways.png"
import Icons from '../../../component/CommonComponents/icons/Icons'

export default function RailwaysPage() {
  const data = {
    title: "Our Sector",
    name: "Railways",
    content: "We offer advanced railway solutions, focusing on infrastructure development, safety, efficiency, and modern technologies to enhance transportation networks.",
    image: Railways
  }
  const Page = {
    Category: "Transport System",
    name: "Railways"
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
