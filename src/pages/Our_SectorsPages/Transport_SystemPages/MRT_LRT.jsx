import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import MRT_LRT from "../../../assets/Transport_systems/MRT-LRT.png"
import Icons from '../../../component/CommonComponents/icons/Icons'

export default function MRT_LRTPage() {
  const data = {
    title: "Our Sector",
    name: "MRT/LRT",
    content: "We provide innovative MRT/LRT solutions, ensuring efficient transit systems, sustainability, and seamless integration to enhance urban mobility and connectivity.",
    image: MRT_LRT
  }
  const Page = {
    Category: "Transport System",
    name: "MRT/LRT"
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
