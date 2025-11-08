import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isRegistro = location.pathname.startsWith("/registro");
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#BBE6E4]">
      <div className="mx-4 md:mx-12 px-2 sm:px-4 md:px-16">
        <div className="text-[#084B83] flex h-12 md:h-16 items-center justify-between">
          <Link to="/" className="text-sm md:text-lg font-bold rounded-xl bg-white py-1 px-4">
            <span>★ AMBOS NORTE</span>
          </Link>
          <ul className="hidden md:flex items-center gap-4 md:gap-8 text-sm md:text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalogo">Productos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            {!isRegistro && (
              <Link to="/registro" className="hidden md:inline-flex items-center text-sm md:text-base font-semibold">
                Iniciar sesión
              </Link>
            )}
          </ul>
          <button className="md:hidden text-[#084B83] text-lg">☰</button>
        </div>
      </div>
    </nav>
  );
}