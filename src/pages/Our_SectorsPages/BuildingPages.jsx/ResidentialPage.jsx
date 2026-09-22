import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import Residential from "../../../assets/Building/Residential.png"

export default function ResidentialPage()
{
 const data={
    title:"Our Sector",
    name:"Residential",
    content:"Residential We deliver creative, sustainable, and high-quality residential solutions, ensuring comfort, safety, modern design, and long-term value for homeowners and communities.",
    image:Residential
 }
 const Page={
  Category:"Building",
  name:"Residential"
 }
  return (
  <>
  <Header/>
  <main>
    <HeroSection Page={Page}/>
    <CommonLayout data={data}/>
  </main>
  <Footer/>
  </>
  )
}
