import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurSectors/CommonLayout"
import UrbanImage from "../../assets/OurSectors/Urban_Land_Development.png"
import Footer from "../../component/CommonComponents/footer"
import Icons from "../../component/CommonComponents/icons/Icons"

export default function UrbanLandDevelopmentPage() {
  const data = {
    title: "Our Sectors",
    name: "Urban Land Development",
    content: "Urban land development involves the transformation of land in cities for residential, commercial, industrial, or recreational use. It includes planning and constructing infrastructure such as roads, utilities, and public spaces to accommodate growing populations and economic activities. Urban land development aims to optimize land use, improve livability, and meet the demands of urban growth. This process often requires zoning regulations, environmental assessments, and collaboration between government, developers, and local communities. Effective land development can stimulate economic growth, enhance property values, and create vibrant, sustainable neighborhoods.",
    image: UrbanImage
  }
  const Page = {
    Category: "Our Sectors",
    name: "Urban Land Development"
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
