import image from "../../assets/OurServices/ProjectManagement.png"
import Footer from "../../component/CommonComponents/footer"
import Header from "../../component/CommonComponents/Header"
import HeroSection from "../../component/CommonComponents/heroSection"
import CommonLayout from "../../component/CommonComponents/OurServices/CommonLayout"

const Project_managementPage = () => {

  const data= {
      title:"Our Sectors",
      name: "Project Management",
      image: image,
      content:
        "Project management involves the planning, organization, and execution of a project to achieve specific goals within a defined timeframe and budget. It encompasses various processes, including setting objectives, allocating resources, managing risks, and coordinating tasks among team members. The project manager plays a key role in overseeing the project's progress, ensuring that it meets deadlines, stays within budget, and delivers the expected outcomes. Effective project management requires skills in communication, leadership, problem-solving, and decision-making. Common methodologies include Waterfall, Agile, and Scrum, each suited for different types of projects. By using proper tools and techniques, project managers can mitigate risks, manage expectations, and ensure a successful project outcome.",
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

export default Project_managementPage