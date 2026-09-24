import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import Icons from "../../component/CommonComponents/icons/Icons"
import OurTeamComponent from "../../component/ourTeamComponent/OurTeamComponent"



const OurTeamPage = () => {
     const Page={
    Category:"Our Team",
    name:"Our Team"
  }
    return (
        <>
            <Header/>
            <main>
                <HeroSection Page={Page}/>
                <OurTeamComponent/>
                <Icons/>
            </main>
            <Footer/>
        </>
    )
}

export default OurTeamPage