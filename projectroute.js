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
        path: "resources", // Path for the About page
        element: <Resources/>,
      },
    ],
  },
]);

export default router;
