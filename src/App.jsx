import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>


      <Navbar />
      <Outlet />
      <Footer />

    </>



  )
}

export default App;
