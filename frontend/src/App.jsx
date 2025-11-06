import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Registro from "./pages/Registro.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="fixed inset-x-0 top-12 md:top-24 bottom-12 overflow-auto">
          <Routes>
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}