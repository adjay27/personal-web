import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App;
