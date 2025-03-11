import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Tenders from "./components/Tenders";
import Resources from "./components/Resources";
import Premier from "./components/Premier";
import Services from "./components/Services";
import Clientlogin from "./components/Clientlogin";
import Companylogin from "./components/Companylogin";
import Sectorsweserve from "./components/Sectorsweserve";
import Componieslogin from "./components/Componieslogin";
import Automobiles from "./components/Automobiles";
import Admin from "./components/Admin";
import AdminPanelPage from "./components/AdminPanelPage";
import Ticketingtool from "./components/Ticketingtool";
import Filterservices from "./components/Filterservices";
import Adminlogin from "./components/Adminlogin";
import ServiceRequests from "./components/ServiceRequests";
import SolarEnergy from "./components/SolarEnergy";
import ChemicalAndFerti from "./components/ChemicalAndFerti";
import Cement from "./components/Cement";
import Pharmacitical from "./components/Pharmacitical";
import FireAndSafety from "./components/FireAndSafety";
import PaperAndPulp from "./components/PaperAndPulp";
import PowerAndGeneration from "./components/PowerAndGeneration";
import Petrochemical from "./components/Petrochemical";
import SoftBeverages from "./components/SoftBeverages";
import Metal from "./components/Metal";
import Textile from "./components/Textile";
import Agritech from "./components/Agritech";
import BatteryAndEnergy from "./components/BatteryAndEnergy";
import Mahadiscom from "./components/Mahadiscom";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import CompanyLoginn from "./components/CompanyLoginn";
import CompanyRegister from "./components/CompanyRegister";
import AdminRegister from "./components/AdminRegister";
import AdminLoginn from "./components/AdminLoginn";







const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main entry component
    children: [
      {
        path: "/", // This is the root path, displaying the Home component
        element: <Home />,
      },
      {
        path: "about", // Path for the About page
        element: <About />,
      },
      {
        path: "premier", // Path for the Premier page
        element: <Premier />,
      },
      {
        path: "contact", // Path for the About page
        element: <Contact />,
      },
      {
        path: "services", // Path for the About page
        element: <Services/>,
      },
      {
        path: "sectorsweserve", // Path for the About page
        element: <Sectorsweserve/>,
      },
      {
        path: "services/about", // Path for the About section under services
        element: <About />,
      },
      {
        path: "services/premier", // Path for Premier services under services
        element: <Premier />,
      },
      {
        path: "tenders", // Path for the About page
        element: <Tenders />,
      },
      {
        path: "clientlogin", // Path for the About page
        element: <Clientlogin/>,
      },
      {
        path: "companylogin", // Path for the About page
        element: <Companylogin/>,
      },
      {
        path: "componieslogin", // Path for the About page
        element: <Componieslogin/>,
      },
      {
        path: "/", // Home route
        element: <Sectorsweserve />,
      },
      {
        path: "Automobiles", // Path for Automobiles page
        element: <Automobiles/>,
      },
      
      {
        path: "admin", // Path for Automobiles page
        element: <Admin/>,
      },
      {
        path: "adminpanel", // Path for Adminpanel page
        element: <AdminPanelPage/>,
      },
      {
        path: "ticketingtool", // Path for Automobiles page
        element: <Ticketingtool />,
      },
      {
        path: "filterservices", // Path for Automobiles page
        element: <Filterservices/>,
      },
      {
        path: "adminlogin", 
        element: <Adminlogin/>,
      },
      { path: "service-requests",
         element: <ServiceRequests /> 
      },
      {
        path: "solerEnergy", 
        element: <SolarEnergy/>,
      },
      {
        path: "ChemicalAndFerti", // Path for Automobiles page
        element: <ChemicalAndFerti/>,
      },
      {
        path: "Cement", // Path for Automobiles page
        element: <Cement/>,
      },
      {
        path: "Pharmacitical", // Path for Automobiles page
        element: <Pharmacitical/>,
      },
      {
        path: "FireAndSafety", // Path for Automobiles page
        element: <FireAndSafety/>,
      },
      {
        path: "PaperAndpulp", // Path for Automobiles page
        element: <PaperAndPulp/>,
      },
      {
        path: "PowerAndGeneration", // Path for Automobiles page
        element: <PowerAndGeneration/>,
      },
      {
        path: "Petrochemical", // Path for Automobiles page
        element: <Petrochemical/>,
      },
      {
        path: "SoftBeverages", // Path for SoftBeverages page
        element: <SoftBeverages/>,
      },
      {
        path: "Metal", // Path for SoftBeverages page
        element: <Metal/>,
      },
      {
        path: "Textile", // Path for SoftBeverages page
        element: <Textile/>,
      },
      {
        path: "Agritech", // Path for SoftBeverages page
        element: <Agritech/>,
      },
      {
        path: "BatteryAndEnergy", // Path for SoftBeverages page
        element: <BatteryAndEnergy/>,
      },
      {
        path: "Mahadiscom", // Path for SoftBeverages page
        element: <Mahadiscom/>,
      },
      {
        path: "UserRegister", // Path for UserRegister 
        element: <UserRegister/>,
      },
      {
        path: "UserLogin", // Path for UserRegister 
        element: <UserLogin/>,
      },
      {
        path: "Services", 
        element: <Services/>,
      },
      {
        path: "CompanyLoginn", // Path for CompanyLoginn 
        element: <CompanyLoginn/>,
      },
      {
        path: "CompanyRegister", // Path for CompanyRegister
        element: <CompanyRegister/>,
      },
      {
        path: "AdminRegister", // Path for AdminRegister
        element: <AdminRegister/>,
      },
      {
        path: "AdminLoginn", // Path for AdminLoginn
        element: <AdminLoginn/>,
      },
    ],
  },
]);

export default router;
