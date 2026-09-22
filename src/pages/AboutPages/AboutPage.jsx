import Header from "../../component/CommonComponents/Header"
import About from "../../component/AboutComponent/Aboutcomponent"
import Footer from "../../component/CommonComponents/footer"
import HeroSection from '../../component/CommonComponents/heroSection'

export default function AboutPage() {
  const Page={
    Category:"About Us",
    name:"About Us"
  }
  return (
    <>
      <Header/>
      <HeroSection Page={Page} />
      <About/>
      <Footer/>
    </>
  )
}
