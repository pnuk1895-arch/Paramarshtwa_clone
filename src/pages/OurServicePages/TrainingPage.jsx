import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"
import image from "../../assets/OurServices/Training.png"

export default function TrainingPage()
{
  const data={
      title:"Our Sectors", 
      name:"Training",
      image: image,
      content:
        "Training is the process of teaching individuals or groups the skills, knowledge, and competencies required to perform specific tasks or roles effectively. It can take various forms, including workshops, seminars, on-the-job training, online courses, or formal education programs. Training is essential in both personal and professional development, enabling individuals to enhance their abilities, improve performance, and adapt to new challenges. For businesses, employee training is vital for increasing productivity, ensuring compliance with industry standards, and fostering a culture of continuous learning. It can cover a wide range of areas, such as technical skills, soft skills, safety protocols, or leadership development. Well-executed training programs improve employee engagement, reduce errors, and contribute to overall organizational success and growth.",
    }
  return (
      <>
      <Header />
      <main>
        <HeroSection />
        <CommonLayout data={data} />
      </main>
      <Footer />
    </>
  )
}
