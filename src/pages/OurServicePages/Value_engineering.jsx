import image from "../../assets/OurServices/ValueEngineering.png"
import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"

export default function Value_engineeringPage()
{
  const data={
      title:"Our Sectors",
      name: "Value Engineering",
      image: image,
      content:
        "Value engineering is a systematic method used to improve the value of a project by analyzing its functions, reducing costs, and enhancing quality without compromising performance. The goal is to identify ways to achieve the desired outcome at the lowest possible cost while maintaining or improving functionality, safety, and sustainability. This process involves a team of professionals who examine every aspect of the project—such as materials, design, and construction methods—to find cost-effective alternatives. It may include redesigning certain components, using different materials, or altering processes to reduce waste and inefficiency.",
    }
    const Page ={
    Category:"Our Services",
    name:"Value Engineering"
  }
  return (
      <>
      <Header />
      <main>
        <HeroSection Page={Page}  />
        <CommonLayout data={data} />
      </main>
      <Footer />
    </>
  )
}
