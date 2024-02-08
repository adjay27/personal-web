import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      
        <Navbar />
        <Outlet />
        <Footer />
     
    </>
  );
}

export default App;
