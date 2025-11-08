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
import AdminDashboard from "./pages/admin/Admin.jsx";
import VentasAnalysis from "./pages/admin/AdminVentas.jsx";
import Inventario from "./pages/admin/AdminInventario.jsx";

function Layout() {
  const location = useLocation();
  const isRegistro = location.pathname === "/registro";
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className={`flex flex-col min-h-screen ${isRegistro ? "h-screen overflow-hidden" : ""}`}>
      {/* Ocultar navbar en páginas de admin */}
      {!isAdmin && <Navbar />}
      
      <main className={`flex-grow ${!isAdmin ? 'pt-12 md:pt-16' : ''} ${isRegistro ? "p-0 md:pt-0 md:pb-0" : ""}`}>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Landing />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/enviopago" element={<EnvioPago />} />
          <Route path="/compra-exitosa" element={<CompraExitosa />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/perfil" element={<Perfil />} />
          
          {/* Rutas de admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/ventas" element={<VentasAnalysis />} />
          <Route path="/admin/inventario" element={<Inventario />} />
        </Routes>
      </main>
      
      {/* Ocultar footer en páginas de admin */}
      {!isAdmin && <Footer fixed={isRegistro} />}
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