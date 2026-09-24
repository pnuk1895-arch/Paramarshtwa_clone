import Footer from "../../component/CommonComponents/footer";
import Header from "../../component/CommonComponents/Header";
import HeroSection from "../../component/CommonComponents/heroSection";
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout";
import image from "../../assets/OurServices/Capacitybuilding.png"
import Icons from "../../component/CommonComponents/icons/Icons";

export default function Capacity_BuildingPage() {

  const data = {
    title: "Our Sectors",
    name: "Capacity Building",
    image: image,
    content:
      "Capacity building refers to the process of strengthening the skills, abilities, and resources of individuals, organizations, or communities to improve their effectiveness and achieve long-term goals. It involves enhancing knowledge, developing leadership, and providing tools or training to foster growth and sustainability. Capacity building is crucial in various sectors, including healthcare, education, development, and governance. By improving capacity, organizations and communities can better address challenges, make informed decisions, and respond to evolving needs.",
  }
  const Page = {
    Category: "Our Services",
    name: "Capacity Building"
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
