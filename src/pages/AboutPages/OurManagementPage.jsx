
import NewFaceOfProjectManagement from "../../component/OurManagementComponent/NewFaceOfProjectManagement";
import ModernizedProjectsManagement from "../../component/OurManagementComponent/ModernizedProjectsManagement";
import ConstructionManagementComponent from "../../component/OurManagementComponent/ConstructionManagementComponent";
import ManagementSkillComponent from "../../component/OurManagementComponent/ManagementSkillComponent";
import PlanningArchitectureComponent from "../../component/OurManagementComponent/PlanningArchitectureComponent";
import BimModelingComponent from "../../component/OurManagementComponent/3DBimModelingComponent";
import DrawingsTechniqueComponent from "../../component/OurManagementComponent/DrawingsTechniqueComponent";
import FutureOfSCMG from "../../component/OurManagementComponent/FutureOfSCMG";
import PlanningSystemComponent from "../../component/OurManagementComponent/PlanningSystemComponent";
import Header from "../../component/CommonComponents/Header";
import Footer from "../../component/CommonComponents/footer"
import HeroSection from "../../component/CommonComponents/heroSection"
import TheCoreDesign from "../../component/OurManagementComponent/TheCoreDesign";

const OurManagementPage = () => {

   const Page={
    Category:"Our Management",
    name:"Our Management"
  }

  return (
    <>
    <Header/>
    <main className="w-full">
      <HeroSection Page={Page} />
      <NewFaceOfProjectManagement/>
      <ModernizedProjectsManagement/>
      <ConstructionManagementComponent/>
      <ManagementSkillComponent/>
      <PlanningArchitectureComponent/>
      <BimModelingComponent/>
      <DrawingsTechniqueComponent/>
      <FutureOfSCMG/>
      <TheCoreDesign/>
      <PlanningSystemComponent/>
    </main>
    <Footer/>
    </>
    
  );
};

export default OurManagementPage;