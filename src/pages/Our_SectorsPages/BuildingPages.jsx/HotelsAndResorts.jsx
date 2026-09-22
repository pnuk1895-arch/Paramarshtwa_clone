import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import HotelsAndResorts from "../../../assets/Building/Hotels_and_Resorts.png"

export default function HotelsAndResortsPage()
{
 const data={
    title:"Our Sector",
    name:"Hotel And Resorts",
    content:"We create luxurious, sustainable hotel and resort spaces, blending comfort, modern amenities, eco-friendly designs, and exceptional guest experiences.",
    image:HotelsAndResorts
 }
 const Page={
  Category:"Building",
  name:"Residential"
 }
  return (
  <>
  <Header/>
  <main>
    <HeroSection Page={Page} />
    <CommonLayout data={data}/>
  </main>
  <Footer/>
  </>
  )
}
