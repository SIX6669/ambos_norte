export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-300 backdrop-blur-md">
      <div className="mx-4 sm:mx-8 md:mx-12 px-2 sm:px-3 md:px-6">
        <div className="flex h-12 sm:h-18 md:h-24 items-center justify-between">
          <a href="/" className="inline-flex items-center rounded-full bg-white px-3 sm:px-4 py-1 text-sm sm:text-base md:text-lg">
            <span>Ambos Norte</span>
          </a>
          {/* Menú Desktop */}
          <ul className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg">
            <li>
              <a href="#productos">Home</a>
            </li>
            <li>
              <a href="#productos">Productos</a>
            </li>
            <li>
              <a href="#buscar">Buscar</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
          {/* Botón Desktop */}
          <a href="#registro" className="hidden md:inline-flex items-center rounded-full bg-black px-3 sm:px-4 py-1 sm:py-1.5 text-sm sm:text-base md:text-lg text-white">
            Iniciar sesión
          </a>
          {/* Menú Móvil */}
          <button className="md:hidden text-black text-lg">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
