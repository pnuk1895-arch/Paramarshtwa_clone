import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import Retail from "../../../assets/Building/Retail.png"

export default function RetailsPage()
{
 const data={
    title:"Our Sector",
    name:"Retails",
    content:"We offer innovative retail solutions, focusing on functional design, customer experience, sustainability, and seamless integration for businesses' growth.",
    image:Retail
 }
  return (
  <>
  <Header/>
  <main>
    <HeroSection/>
    <CommonLayout data={data}/>
  </main>
  <Footer/>
  </>
  )
}
