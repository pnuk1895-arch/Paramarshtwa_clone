import Footer from "../../component/CommonComponents/footer";
import Header from "../../component/CommonComponents/Header";
import HeroSection from "../../component/CommonComponents/heroSection";
import CommonLayout from "../../component/CommonComponents/OurSectors/CommonLayout";
import Sport_complexes from "../../assets/OurSectors/Sport_complexes.png"

export default function SportComlpexesPage() {
  const data = {
    title: "Our Sectors",
    name: "Sport Complexes",
    content: "Sports complexes are large facilities designed to host a variety of athletic events and activities. They typically feature multiple venues, including stadiums, arenas, courts, fields, and tracks, catering to different sports such as soccer, basketball, tennis, and track and field. These complexes are often used for professional competitions, local leagues, training, and recreational activities. In addition to athletic spaces, sports complexes may include amenities like fitness centers, swimming pools, locker rooms, and spectator seating. Many are also designed to accommodate large crowds and offer parking and concessions.",
    image: Sport_complexes
  }
  const Page = {
    Category: "Our Sectors",
    name: "Sport Complexes"
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
