import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import Icons from "../../component/CommonComponents/icons/Icons"
import DetailAbout from "../../component/HomePageComponent/detailAbout"


const MissionAndVisionPage = () => {
   const Page={
    Category:"Mission And Vision",
    name:"Mission And Vision"
  }
  return (
    <>
        <Header/>
        <main>
          <HeroSection Page={Page} />
          <DetailAbout/>
          <Icons/>
        </main>
        <Footer/>
    </>
   
  )
}

export default MissionAndVisionPage