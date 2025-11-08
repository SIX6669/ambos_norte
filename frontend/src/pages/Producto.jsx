import ProductCard from "../components/ProductCard";

export default function Producto() {
  const producto = {
    nombre: "Ambo Azul",
    precio: "$100.000",
    tallas: ["XS", "S", "M", "L", "XL"],
    imagen: "https://via.placeholder.com/400x400",
  };

  const otros = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    nombre: "Ambo Azul",
    precio: "$100.000",
    imagen: "https://via.placeholder.com/150",
  }));

  return (
    <section className="min-h-screen bg-[#F0F6F6] px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
        <div className="flex-1 flex justify-center">
          <img src={producto.imagen} alt={producto.nombre} className="rounded-lg shadow-md w-full max-w-md object-cover" />
        </div>
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-semibold text-[#2F4858]">{producto.nombre}</h1>
          <p className="text-2xl font-bold">{producto.precio}</p>
          <div>
            <h3 className="font-medium mb-2">TALLE</h3>
            <div className="flex gap-2 flex-wrap">
              {producto.tallas.map((talla) => (
                <button key={talla} className="border px-3 py-1 rounded hover:bg-[#2F4858] hover:text-white transition">
                  {talla}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
      <div className="bg-white border border-gray-200 p-6 rounded-lg mb-16">
        <h2 className="text-xl font-semibold mb-3">Descripción</h2>
        <p className="text-gray-600 leading-relaxed">
          Tela suave y respirable, costuras reforzadas y diseño moderno que se adapta a cualquier
          entorno laboral. Ideal para médicos, enfermeros, odontólogos y profesionales de la salud.
        </p>
      </div>
      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Otros productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {otros.map((prod) => (
            <ProductCard
              key={prod.id}
              name={prod.nombre}
              price={prod.precio}
              image={prod.imagen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}