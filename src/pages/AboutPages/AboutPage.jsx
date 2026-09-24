import Header from "../../component/CommonComponents/Header"
import About from "../../component/AboutComponent/Aboutcomponent"
import Footer from "../../component/CommonComponents/footer"
import HeroSection from '../../component/CommonComponents/heroSection'
import Icons from "../../component/CommonComponents/icons/Icons"

export default function AboutPage() {
  const Page={
    Category:"About Us",
    name:"About Us"
  }
  return (
    <>
      <Header/>
      <main>
        <HeroSection Page={Page} />
        <About/>
        <Icons/>
      </main>
      <Footer/>
    </>
  )
}
