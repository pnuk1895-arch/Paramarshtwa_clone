import Header from '../component/CommonComponents/Header'
import Footer from '../component/CommonComponents/footer'
import HeroSection from '../component/CommonComponents/heroSection'
import Services from '../component/Services.jsx/Services'

const ServicesPage = () => {

  const Page={
    Category:"Our Services",
    name:"Our Services"
  }
  return (
    <>
    <Header/>
    <HeroSection Page={Page} />
    <Services/>
    <Footer/>
    
    </>
  )
}

export default ServicesPage