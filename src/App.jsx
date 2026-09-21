import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Home Page 
import HomePage from './pages/HomePage'

// about page 
import AboutPage from './pages/AboutPages/AboutPage'
import MissionAndVisionPage from './pages/AboutPages/MissionAndVisionPage'
import OurTeamPage from './pages/AboutPages/OurTeamPage'
import OurManagementPage from './pages/AboutPages/OurManagementPage'

// //contact page
import ContactPage from './pages/ContactPage'

// service 
import ServicesPage from './pages/OurServicesPage'

// service page 
import Feasibility_studiesPage from './pages/OurServicePages/Feasbility_studiesPage'
import Project_managementPage from './pages/OurServicePages/Project_managementPage'
import Master_PlanningPage from './pages/OurServicePages/Master_PlanningPage'
import ArchitecturePage from './pages/OurServicePages/ArchitecturePage'
import Detailed_designPage from './pages/OurServicePages/Detailed_designPage'
import Contract_DocumentationPage from './pages/OurServicePages/Contract_DocumentationPage'
import Value_engineeringPage from './pages/OurServicePages/Value_engineering'
import Due_DiligencePage from './pages/OurServicePages/Due_DiligencePage'
import Proof_DiligencePage from './pages/OurServicePages/Proof_DiligencePage'
import Bid_Process_ManagementPage from './pages/OurServicePages/Bid_Process_ManagementPage'
import UrbanInfrastructurePage from './pages/Our_SectorsPages/UrbanInfrastructurePage'
import UrbanLandDevelopmentPage from './pages/Our_SectorsPages/UrbanLandDevelopmentPage'
import UrbanRenewalPage from './pages/Our_SectorsPages/UrbanRenewalPage'
import EnvironmentalPage from './pages/Our_SectorsPages/EnvironmentalPage'
import IndustrialSEZPage from './pages/Our_SectorsPages/IndustrialSEZPage'
import S_AND_DPage from './pages/Our_SectorsPages/S_AND_DPage'
import Water_S_A_SPage from './pages/Our_SectorsPages/Water_S_A_SPage'
import SportComlpexesPage from './pages/Our_SectorsPages/SportComlpexesPage'
import AviationPage from './pages/Our_SectorsPages/AviationPage'
import Asset_ManagementPage from './pages/OurServicePages/Asset_ManagementPage'
import TrainingPage from './pages/OurServicePages/TrainingPage'
import Capacity_BuildingPage from './pages/OurServicePages/Capacity_BuildingPage'
import Testing_And_CommissioningPage from './pages/OurServicePages/Testing_And_CommissioningPage'
import Statutory_InspectionsPage from './pages/OurServicePages/Statutory_InspectionsPage'
import Quality_AssurancePage from './pages/OurServicePages/Quality_AssurancePage'
import Post_Contract_EvalutionPage from './pages/OurServicePages/Post-Contract_EvalutionPage'
import Technical_AuditsPage from './pages/OurServicePages/Technical_AuditsPage'
import Contract_AdministrationPage from './pages/OurServicePages/Contract_AdministrationPage'
import Construction_ManagementPage from './pages/OurServicePages/Construction_ManagementPage'
import ResidentialPage from './pages/Our_SectorsPages/BuildingPages.jsx/ResidentialPage'
import CommercialPage from './pages/Our_SectorsPages/BuildingPages.jsx/CommercialPage'
import Education_InstitutionalPage from './pages/Our_SectorsPages/BuildingPages.jsx/Education_Institutional'
import HealthCarePage from './pages/Our_SectorsPages/BuildingPages.jsx/HealthCare'
import HotelsAndResortsPage from './pages/Our_SectorsPages/BuildingPages.jsx/HotelsAndResorts'
import IT_And_IT_EnabledPage from './pages/Our_SectorsPages/BuildingPages.jsx/IT_&_IT_Enabled'
import RetailsPage from './pages/Our_SectorsPages/BuildingPages.jsx/Retails'
import RailwaysPage from './pages/Our_SectorsPages/Transport_SystemPages/Railways'
import MRT_LRTPage from './pages/Our_SectorsPages/Transport_SystemPages/MRT_LRT'
import HighWay_And_BridgesPage from './pages/Our_SectorsPages/Transport_SystemPages/Highway_And_Bridges'


const data = [

  // Home Page 
  ['/', HomePage],
  //  About
  ['/About_Us', AboutPage],
  ['/Mission&Vision', MissionAndVisionPage],
  ['/Our_Team', OurTeamPage],
  ['/Our_Management', OurManagementPage],
  //contact us
  ["/Contact_Us", ContactPage],
  // Service component
  ['/Services', ServicesPage],
  // our services page 
  ['/Feasibility_studies', Feasibility_studiesPage],
  ["/Project_management", Project_managementPage],
  ["/Master_Planning", Master_PlanningPage],
  ["/Architecture", ArchitecturePage],
  ["/Detailed_Design", Detailed_designPage],
  ['/Value_Engineering', Value_engineeringPage],
  ['/Contract_Documentations', Contract_DocumentationPage],
  ['/Due_Diligence', Due_DiligencePage],
  ["/Proof_Diligence", Proof_DiligencePage],
  ["/Bid_Process_Management", Bid_Process_ManagementPage],
  ["/Technical_Audits", Technical_AuditsPage],
  ["/Contruction_Management", Construction_ManagementPage],
  ["/Contract_Adminstration", Contract_AdministrationPage],
  ["/Post_Contract_Evalution", Post_Contract_EvalutionPage],
  ["/Quality_Assurance", Quality_AssurancePage],
  ["/Statutory_Inspections", Statutory_InspectionsPage],
  ["/Asset_Management", Asset_ManagementPage],
  ["/Training", TrainingPage],
  ["/Capacity_Building", Capacity_BuildingPage],
  ["/Testing_And_Commissioning", Testing_And_CommissioningPage],
  // our sectors 
  ["/Urban_Infrastructure", UrbanInfrastructurePage],
  ["/UrbanLandDevelopment", UrbanLandDevelopmentPage],
  ["/UrbanRenewal", UrbanRenewalPage],
  ['/Environmental', EnvironmentalPage],
  ["/IndustrialSEZ", IndustrialSEZPage],
  ["/sewage_And_Drainage", S_AND_DPage],
  ['/water_supply_And_sanitation', Water_S_A_SPage],
  ["/SportComlpexes", SportComlpexesPage],
  ["/Aviation", AviationPage],
  // our Sectors /Building 
  ["/Residential", ResidentialPage],
  ["/Commercial", CommercialPage],
  ["/Education_Institutional", Education_InstitutionalPage],
  ["/HealthCare", HealthCarePage],
  ["/Hotels_And_Resorts", HotelsAndResortsPage],
  ["/IT_And_IT_Enabled", IT_And_IT_EnabledPage],
  ["/Retail", RetailsPage],
  //Transport System
  ["/Railways", RailwaysPage],
  ["/MRT_LRT",MRT_LRTPage],
  ["/Highway_And_Bridges",HighWay_And_BridgesPage]
]

const App = () => {

  return (
    <Routes>
      {
        data.map(([path, Component], index) => (
          <Route key={index} path={path} element={<Component />} />
        ))
      }
    </Routes>

  )
}

export default App
