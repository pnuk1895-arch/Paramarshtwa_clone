import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import Health from "../../../assets/Building/HealthCare.png"
import Icons from '../../../component/CommonComponents/icons/Icons'

export default function HealthCarePage()
{
 const data={
    title:"Our Sector",
    name:"Health care",
    content:"We deliver state-of-the-art healthcare facilities, ensuring optimal patient care, compliance with regulations, safety standards, and long-term operational efficiency.",
    image:Health
 }
 const Page={
  Category:"Building",
  name:"Health Care"
 }
  return (
  <>
  <Header/>
  <main>
    <HeroSection Page={Page} />
    <CommonLayout data={data}/>
    <Icons/>
  </main>
  <Footer/>
  </>
  )
}
