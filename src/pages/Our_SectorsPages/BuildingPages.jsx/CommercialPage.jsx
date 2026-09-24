import Header from '../../../component/CommonComponents/Header'
import Footer from '../../../component/CommonComponents/footer'
import HeroSection from '../../../component/CommonComponents/heroSection'
import CommonLayout from '../../../component/CommonComponents/OurSectors/CommonLayout'
import Commercial from "../../../assets/Building/Commercial.png"
import Icons from '../../../component/CommonComponents/icons/Icons'

export default function CommercialPage()
{
 const data={
    title:"Our Sector",
    name:"Commercial",
    content:"We guarantee practicality, contemporary style, regulatory conformity, and lasting value for companies by providing commercial solutions that are creative, effective.",
    image:Commercial
 }
  const Page={
    Category:"Building",
    name:"Commercial"
  }
  return (
  <>
  <Header/>
  <main>
    <HeroSection/>
    <CommonLayout data={data}/>
    <Icons/>
  </main>
  <Footer/>
  </>
  )
}
