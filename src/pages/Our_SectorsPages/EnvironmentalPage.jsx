import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurSectors/CommonLayout"
import Environment from "../../assets/OurSectors/EnvironmentalImage.png"
import Icons from "../../component/CommonComponents/icons/Icons"

export default function EnvironmentalPage() {
  const data = {
    title: "Our Sectors",
    name: "Environmental",
    content: "Environmental issues refer to the challenges related to the protection and preservation of the natural world. These issues include pollution (air, water, and land), deforestation, climate change, loss of biodiversity, and the depletion of natural resources. Human activities, such as industrialization, deforestation, and overconsumption, have significantly contributed to environmental degradation. Efforts to address these issues involve sustainable practices, conservation of ecosystems, and reducing carbon emissions. Renewable energy sources, waste recycling, and eco-friendly technologies are key strategies in mitigating environmental damage. Governments, organizations, and individuals all play a crucial role in promoting environmental awareness and taking actions to protect the planet.",
    image: Environment
  }
  const Page = {
    Category: "Our Sectors",
    name: "Environmental"
  }
  return (
    <>
      <Header />
      <main>
        <HeroSection Page={Page} />
        <CommonLayout data={data} />
        <Icons/>
      </main>
      <Footer />
    </>
  )
}
