import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import image from '../../assets/OurServices/Architecture.png'

 const ArchitecturePage = () => {

  const data={
    title:"Our Sectors",
    name:"Architecture",
    content:"Architecture is the art and science of designing and constructing buildings, structures, and spaces that are functional, aesthetically pleasing, and sustainable. It blends creativity, engineering, and technology to create environments that meet the needs of individuals, communities, and businesses. Architects consider factors like form, function, safety, and environmental impact when designing spaces, from residential homes to commercial buildings and urban landscapes. Modern architecture incorporates sustainable practices, such as energy-efficient designs and eco-friendly materials, to reduce the environmental impact.",
    Image:image
  }
  
  

  return (

    <>
       <Header/>
       <main>
           <HeroSection/>
           <CommonLayout data={data} sectors />
       </main>
       <Footer/>
    </>
  )
}

export default ArchitecturePage