import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import ITImage from "../../../assets/Building/IT_and_IT_enabled.png"

export default function IT_And_IT_EnabledPage() {
  const data = {
    title: "Our Sector",
    name: "IT and IT Enabled",
    content: "We provide innovative IT solutions, leveraging cutting-edge technology and services, ensuring efficiency, scalability, and seamless integration for businesses.",
    image: ITImage
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
      </main>
      <Footer />
    </>
  )
}
