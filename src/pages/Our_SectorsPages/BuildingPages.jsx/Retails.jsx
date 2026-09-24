import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import Retail from "../../../assets/Building/Retail.png"
import Icons from '../../../component/CommonComponents/icons/Icons'

export default function RetailsPage() {
  const data = {
    title: "Our Sector",
    name: "Retails",
    content: "We offer innovative retail solutions, focusing on functional design, customer experience, sustainability, and seamless integration for businesses' growth.",
    image: Retail
  }
  const Page = {
    Category: "Building",
    name: "Residential"
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
