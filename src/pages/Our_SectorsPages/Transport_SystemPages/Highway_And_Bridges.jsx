import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import HighWay_And_Bridges from "../../../assets/Transport_systems/Highway_And_Bridges.png"
import Icons from '../../../component/CommonComponents/icons/Icons'

export default function HighWay_And_BridgesPage() {
  const data = {
    title: "Our Sector",
    name: "HighWay And Bridges",
    content: "We design and construct durable highways and bridges, ensuring safety, efficiency, and sustainability with advanced engineering solutions.",
    image: HighWay_And_Bridges
  }
  const Page = {
    Category: "Transport System",
    name: "HIghway And Bridges"
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
