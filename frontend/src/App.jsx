import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Registro from "./pages/Registro.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./pages/Landing.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Producto from "./pages/Producto.jsx";
import Carrito from "./pages/Carrito.jsx";
import EnvioPago from "./pages/EnvioPago.jsx";
import CompraExitosa from "./pages/CompraExitosa.jsx";
import Contacto from "./pages/Contacto.jsx";
import Perfil from "./pages/Perfil.jsx";

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
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/enviopago" element={<EnvioPago />} />
          <Route path="/compra-exitosa" element={<CompraExitosa />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/perfil" element={<Perfil />} />
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
