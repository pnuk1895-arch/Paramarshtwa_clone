import HeroSection from "../../component/CommonComponents/heroSection";
import CommonLayout from "../../component/CommonComponents/OurSectors/CommonLayout";
import Header from "../../component/CommonComponents/Header"
import Footer from "../../component/CommonComponents/footer"
import Aviation from "../../assets/OurSectors/Aviation.png"
import Icons from "../../component/CommonComponents/icons/Icons";

export default function AviationPage() {
  const data = {
    title: "Our Sectors",
    name: "Aviation",
    content: "Aviation refers to the design, development, operation, and use of aircraft, including airplanes, helicopters, and drones. It plays a critical role in modern transportation, connecting people and goods across vast distances, enabling faster travel and global trade. The history of aviation dates back to the early 20th century, with pioneers like the Wright brothers achieving powered flight in 1903. Over time, aviation technology has advanced significantly, leading to the development of commercial airliners, military aircraft, and spacecraft. The aviation industry includes various sectors, such as civil, military, and cargo aviation. Civil aviation encompasses passenger and freight transport, while military aviation focuses on defense and combat operations.",
    image: Aviation
  }
  const Page = {
    Category: "Our Sectors",
    name: "Aviation"
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
