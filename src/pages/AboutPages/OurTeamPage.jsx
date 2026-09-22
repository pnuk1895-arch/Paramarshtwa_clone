import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
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
            </main>
            <Footer/>
        </>
    )
}

export default OurTeamPage