import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurSectors/CommonLayout"
import WaterImage from "../../assets/OurSectors/Water_supply_&_Sanitation.png"

export default function Water_S_A_SPage() {
  const data = {
    title: "Our Sectors",
    name: "Water Supply & Sanitation",
    content: "Water supply and sanitation are essential services that ensure the availability of clean drinking water and the safe disposal of wastewater. A reliable water supply system involves sourcing, treating, and distributing water to households, industries, and agriculture. Sanitation, on the other hand, focuses on managing wastewater, sewage, and solid waste to prevent pollution and protect public health. Access to clean water and proper sanitation is crucial for preventing waterborne diseases, promoting hygiene, and improving overall quality of life. In many developing regions, inadequate infrastructure and poor sanitation lead to health risks and environmental challenges.",
    image: WaterImage
  }
  const Page = {
    Category: "Our Sectors",
    name: "Water Supply & Sanitation"
  }
  return (
    <>
      <Header />
      <main>
        <HeroSection Page={Page} />
        <CommonLayout data={data} />
      </main>
      <Footer />
    </>
  )
}
