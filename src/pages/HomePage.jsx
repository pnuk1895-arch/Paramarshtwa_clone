import React from 'react'
import Header from '../component/CommonComponents/Header'
import HeroSection from '../component/HomePageComponent/HeroSection'
import WelcomePage from '../component/HomePageComponent/WelcomeSection'
import AboutSection from '../component/HomePageComponent/AboutSection'
import OurServices from '../component/HomePageComponent/OurServices'
import DetailAbout from '../component/HomePageComponent/detailAbout'
import Testimonials from '../component/HomePageComponent/testimonials'
import ExperienceArea from '../component/HomePageComponent/ExperienceArea'
import Gallery from '../component/HomePageComponent/GallerySection'
import JoinOurTeam from '../component/HomePageComponent/JoinTeamSection'
import Footer from '../component/CommonComponents/footer'
import Icons from '../component/CommonComponents/icons/Icons'

const HomePage = () => {
  return (
    <>
        <Header/>
        <main>
          <HeroSection/>
          <WelcomePage/>
          <AboutSection/>
          <OurServices/>
          <DetailAbout/>
          <Testimonials/>
          <ExperienceArea/>
          <Gallery/>
          <JoinOurTeam/>
          <Icons/>
        </main>
        
        <Footer/>
        
    </>
  )
}

export default HomePage