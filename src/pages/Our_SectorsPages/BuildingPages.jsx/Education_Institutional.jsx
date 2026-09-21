import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import Image from "../../../assets/Building/Education-Institutional.png"

export default function Education_InstitutionalPage()
{
 const data={
    title:"Our Sector",
    name:"Education, Institutional",
    content:"With an eye toward efficiency, security, compliance, and long-term worth, we plan and construct educational and institutional facilities that are novel, environmentally friendly.",
    image:Image
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
