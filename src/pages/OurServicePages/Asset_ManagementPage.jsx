import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from '../../assets/OurServices/AssetManagement.png'


 const data={
    title:"Our Sectors",
    name: "Asset Management",
    image: image,
    content:
      "Asset management is the process of overseeing and optimizing the value, performance, and lifecycle of an organization's assets, including physical, financial, and intellectual properties. It involves activities such as tracking, maintaining, and replacing assets to ensure their efficient use and maximize their return on investment. Asset management is crucial in industries like manufacturing, infrastructure, real estate, and finance. Key components of asset management include asset tracking, preventive maintenance, risk management, and financial planning. In addition, technology such as software tools can help streamline asset management by providing real-time data and analysis. Effective asset management improves operational efficiency, reduces costs, extends asset lifespan, and ensures compliance with regulatory standards.",
  }

export default function Asset_ManagementPage()
{
  return (
    <>
      <Header/>
      <main>
        <HeroSection/> 
        <CommonLayout data={data} />
      </main>
      <Footer/>
    </>
  )
}
