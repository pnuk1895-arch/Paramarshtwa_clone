import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import DetailAbout from "../../component/HomePageComponent/detailAbout"


const MissionAndVisionPage = () => {
   const Page={
    Category:"Mission And Vision",
    name:"Mission And Vision"
  }
  return (
    <>
        <Header/>
        <HeroSection Page={Page} />
        <DetailAbout/>
        <Footer/>
    </>
   
  )
}

export default MissionAndVisionPage