import Header from "../../component/CommonComponents/Header"
import About from "../../component/AboutComponent/Aboutcomponent"
import Footer from "../../component/CommonComponents/footer"
import HeroSection from '../../component/CommonComponents/heroSection'

export default function AboutPage() {
  return (
    <div className="relative">
    <Header/>
    <HeroSection />
    <About/>
    <Footer/>
    </div>
  )
}
