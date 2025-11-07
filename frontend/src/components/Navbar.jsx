import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isRegistro = location.pathname.startsWith("/registro");
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#F0F6F6]">
      <div className="mx-4 md:mx-12 px-2 sm:px-4 md:px-6">
        <div className="flex h-12 md:h-16 items-center justify-between">
          <Link to="/" className="text-[#3D5A80] text-sm md:text-lg font-bold">
            <span>AMBOS NORTE</span>
          </Link>
          <ul className="text-[#293241] hidden md:flex items-center gap-4 md:gap-8 text-sm md:text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/buscar">Buscar</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            {!isRegistro && (
              <Link to="/registro" className="hidden md:inline-flex items-center rounded bg-[#293241] px-4 py-2 text-sm md:text-base text-white">
                Iniciar sesión
              </Link>
            )}
          </ul>
          <button className="md:hidden text-black text-lg">☰</button>
        </div>
      </div>
    </nav>
  );
}