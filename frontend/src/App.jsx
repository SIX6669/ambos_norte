import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Registro from "./pages/Registro.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./pages/Landing.jsx";

function Layout() {
  const location = useLocation();
  const isRegistro = location.pathname === "/registro";

  return (
    <div className={`flex flex-col min-h-screen ${isRegistro ? "h-screen overflow-hidden" : ""}`}>
      <Navbar />
      <main className={`flex-grow pt-12 md:pt-16 ${isRegistro ? "p-0 md:pt-0 md:pb-0" : ""}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </main>
      <Footer fixed={isRegistro} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}