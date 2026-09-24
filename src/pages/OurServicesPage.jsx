import Header from '../component/CommonComponents/Header'
import Footer from '../component/CommonComponents/footer'
import HeroSection from '../component/CommonComponents/heroSection'
import Icons from '../component/CommonComponents/icons/Icons'
import Services from '../component/Services.jsx/Services'

const ServicesPage = () => {

  const Page={
    Category:"Our Services",
    name:"Our Services"
  }
  return (
    <>
    <Header/>
    <main>
      <HeroSection Page={Page} />
      <Services/>
      <Icons/>
    </main>
    <Footer/>
    
    </>
  )
}

export default ServicesPage