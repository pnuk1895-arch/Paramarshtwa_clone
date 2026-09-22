import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurSectors/CommonLayout"
import UrbanImage from "../../assets/OurSectors/Urban-renewal.png"

export default function UrbanRenewalPage() {
  const data = {
    title: "Our Sectors",
    name: "Urban Renewal",
    content: "Urban renewal refers to the process of revitalizing and redeveloping deteriorating or underdeveloped areas in cities to improve living conditions, stimulate economic growth, and enhance public spaces. This often involves renovating old buildings, constructing new infrastructure, and improving amenities such as transportation, parks, and housing. The goal is to transform neglected neighborhoods into vibrant, sustainable communities. Urban renewal can address issues like overcrowding, blight, and inadequate public services, making areas more attractive for residents, businesses, and tourists. However, it can also lead to challenges such as gentrification, where rising property values displace low-income residents. Successful urban renewal projects require careful planning, community involvement, and a balance between modernization and preserving the cultural and historical aspects of the area.",
    image: UrbanImage
  }
  const Page = {
    Category: "Our Sectors",
    name: "Urban Renewal"
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
