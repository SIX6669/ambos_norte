export default function EnvioPago() {
  return (
    <section className="h-full min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-8rem)] bg-[#F0F6F6] px-6 md:px-20 py-12">
      <h1 className="text-3xl font-semibold mb-10 text-[#2F4858]">DETALLES DE ENVÍO Y PAGO</h1>
      <div className="bg-white shadow rounded-lg p-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Datos de Envío</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Nombre completo" className="w-full border px-4 py-2 rounded-md" />
            <input type="text" placeholder="Dirección" className="w-full border px-4 py-2 rounded-md" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Ciudad" className="border px-4 py-2 rounded-md" />
              <input type="text" placeholder="Código Postal" className="border px-4 py-2 rounded-md" />
            </div>
            <input type="text" placeholder="Teléfono" className="w-full border px-4 py-2 rounded-md" />
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Mercado Pago</h2>
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <a href="/compra-exitosa"className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
          Finalizar compra
        </a>
      </div>
    </section>
  );
}