import { useState } from "react";

export default function Perfil() {
  const [usuario, setUsuario] = useState({
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "+54 9 372 123-456",
    email: "sunieux@gmail.com",
    direccion: "Avenida 123, Resistencia, Chaco",
  });

  const [seccion, setSeccion] = useState("datos");

  const [pedidos, setPedidos] = useState([
    {
      id: "PED-1001",
      fecha: "2025-05-18",
      estado: "En preparación",
      total: 4599.0,
      metodoPago: "MercadoPago",
      items: [
        { id: 1, nombre: "Camisa laboral", qty: 2, precio: 1999 },
        { id: 2, nombre: "Gorro", qty: 1, precio: 601 },
      ],
    },
    {
      id: "PED-1002",
      fecha: "2025-04-02",
      estado: "En camino",
      total: 2599.0,
      metodoPago: "Tarjeta",
      items: [
        { id: 1, nombre: "Pantalón", qty: 1, precio: 1599 },
        { id: 2, nombre: "Cinta reflectiva", qty: 2, precio: 500 },
      ],
    },
    {
      id: "PED-1003",
      fecha: "2025-02-10",
      estado: "Entregado",
      total: 1299.0,
      metodoPago: "Efectivo",
      items: [{ id: 1, nombre: "Remera", qty: 1, precio: 1299 }],
    },
  ]);

  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    console.log("Guardando usuario:", usuario);
    alert("Cambios guardados (simulado). Revisa la consola.");
  };

  const verDetalle = (pedido) => {
    setPedidoSeleccionado(pedido);
    setSeccion("pedidos");
  };

  const volverLista = () => setPedidoSeleccionado(null);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <aside className="md:w-1/4 w-full flex md:flex-col gap-3 md:gap-4 justify-center md:justify-start py-6 md:py-12">
        <div className="bg-white shadow-lg rounded-xl p-4 w-[92%] md:w-3/4 mx-auto">
          <ul className="flex md:flex-col justify-between md:justify-start md:gap-4 text-gray-600 text-sm font-medium">
            <li
              onClick={() => setSeccion("datos")}
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${seccion === "datos" ? "bg-gray-100 text-black" : "hover:bg-gray-100"}`}>
              <span>Mis datos</span>
            </li>
            <li
              onClick={() => setSeccion("seguridad")}
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${seccion === "seguridad" ? "bg-gray-100 text-black" : "hover:bg-gray-100"}`}>
              <span>Seguridad</span>
            </li>
            <li
              onClick={() => { setSeccion("pedidos"); setPedidoSeleccionado(null); }}
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${seccion === "pedidos" ? "bg-gray-100 text-black" : "hover:bg-gray-100"}`}>
              <span>Mis pedidos</span>
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 px-6 md:px-16 py-10">
        {seccion === "datos" && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Mi cuenta</h1>
            <p className="text-gray-500 mb-8 text-sm md:text-base">Información personal</p>
            <form className="flex flex-col gap-6" onSubmit={handleGuardar}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">
                    Nombre
                  </label>
                  <input
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleChange}
                    type="text"
                    placeholder="Ingresá tu nombre"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">
                    Apellido
                  </label>
                  <input
                    name="apellido"
                    value={usuario.apellido}
                    onChange={handleChange}
                    type="text"
                    placeholder="Ingresá tu apellido"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">
                    Teléfono
                  </label>
                  <input
                    name="telefono"
                    value={usuario.telefono}
                    onChange={handleChange}
                    type="text"
                    placeholder="Número de teléfono"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">
                    Email
                  </label>
                  <input
                    name="email"
                    value={usuario.email}
                    readOnly
                    type="email"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-500 bg-gray-50 cursor-not-allowed"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">
                  Tu dirección
                </label>
                <input
                  name="direccion"
                  value={usuario.direccion}
                  onChange={handleChange}
                  type="text"
                  placeholder="Avenida 123, Resistencia, Chaco"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <button type="submit" className="mt-6 w-fit bg-black text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform duration-200">
                GUARDAR CAMBIOS
              </button>
            </form>
          </>
        )}
        {seccion === "seguridad" && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Seguridad</h1>
            <p className="text-gray-500 mb-6 text-sm md:text-base">
              Actualizá tu contraseña para mantener tu cuenta segura.
            </p>
            <form className="flex flex-col gap-6 max-w-md" onSubmit={(e) => { e.preventDefault(); alert("Cambio de contraseña simulado"); }}>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">
                  Contraseña actual
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-fit bg-black text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform duration-200"
              >
                CAMBIAR CONTRASEÑA
              </button>
            </form>
          </>
        )}
        {seccion === "pedidos" && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Mis pedidos</h1>
            <p className="text-gray-500 mb-6 text-sm md:text-base">
              Revisá el estado de tus pedidos y los detalles de cada compra.
            </p>
            {pedidoSeleccionado ? (
              <div className="max-w-3xl bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="font-semibold text-lg">{pedidoSeleccionado.id}</h2>
                    <p className="text-sm text-gray-500">{pedidoSeleccionado.fecha} • {pedidoSeleccionado.estado}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Método</p>
                    <p className="font-medium">{pedidoSeleccionado.metodoPago}</p>
                  </div>
                </div>
                <div className="border-t border-b border-gray-100 py-4 my-4">
                  <h3 className="text-sm font-semibold mb-2">Items</h3>
                  <ul className="space-y-3">
                    {pedidoSeleccionado.items.map((it) => (
                      <li key={it.id} className="flex justify-between">
                        <div>
                          <p className="font-medium">{it.nombre}</p>
                          <p className="text-xs text-gray-500">Cantidad: {it.qty}</p>
                        </div>
                        <div className="font-semibold">${it.precio.toFixed(2)}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-xl font-bold">${pedidoSeleccionado.total.toFixed(2)}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={volverLista}
                      className="px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-gray-200"
                    >
                      Volver
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                {pedidos.map((p) => (
                  <div key={p.id} className="flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-200 rounded-lg p-4">
                    <div className="flex-1">
                      <div className="flex items-start md:items-center justify-between gap-4">
                        <div>
                          <h3 className="font-semibold">{p.id}</h3>
                          <p className="text-sm text-gray-500">{p.fecha} • {p.items.length} item(s) • {p.estado}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0 md:ml-4">
                      <button
                        onClick={() => verDetalle(p)}
                        className="px-4 py-2 rounded-full bg-black text-white text-sm hover:opacity-90"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                ))}
                {pedidos.length === 0 && (
                  <div className="border border-gray-200 rounded-lg p-6 text-center text-gray-500">
                    No tenés pedidos todavía.
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}