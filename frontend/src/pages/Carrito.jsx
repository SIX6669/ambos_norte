export default function Carrito() {
  const items = [
    { id: 1, nombre: "Ambo Azul", precio: 100000, imagen: "https://via.placeholder.com/100" },
    { id: 2, nombre: "Ambo Verde", precio: 95000, imagen: "https://via.placeholder.com/100" },
  ];

  const total = items.reduce((sum, item) => sum + item.precio, 0);

  return (
    <section className="h-full min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-8rem)] bg-[#F0F6F6] px-6 md:px-20 py-12">
      <h1 className="text-3xl font-semibold mb-10 text-[#2F4858]">CARRITO DE COMPRAS</h1>

      <div className="bg-white shadow rounded-lg p-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="border-b text-left text-gray-500">
            <tr>
              <th className="pb-3">Producto</th>
              <th className="pb-3">Cantidad</th>
              <th className="pb-3">Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b last:border-none">
                <td className="py-4 flex items-center gap-4">
                  <img src={item.imagen} alt={item.nombre} className="w-16 h-16 rounded-md object-cover" />
                  <span className="font-medium">{item.nombre}</span>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <button className="border rounded-full w-6 h-6 flex justify-center items-center">-</button>
                    <span>1</span>
                    <button className="border rounded-full w-6 h-6 flex justify-center items-center">+</button>
                  </div>
                </td>
                <td>${item.precio.toLocaleString()}</td>
                <td>
                  <button className="text-gray-400 hover:text-red-500">✕</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-6 items-center gap-6">
          <p className="text-lg font-semibold">Total: ${total.toLocaleString()}</p>
          <a
            href="/envio-pago"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Checkout
          </a>
        </div>
      </div>
    </section>
  );
}