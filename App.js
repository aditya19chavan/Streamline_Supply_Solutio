import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom"; // Used to render the matched child route

function App() {
  return (
    <>
      <Header />
      {/* The Outlet will render the matched child route */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
