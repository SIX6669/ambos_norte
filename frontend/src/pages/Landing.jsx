import Hero from "../assets/hero.png"

export default function Landing() {
  return (
    <main>
      <section className="bg-[#F0F6F6] h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center overflow-hidden">
        <div className="md:w-1/2 text-center space-y-4 md:space-y-6 px-10 md:px-20 pt-10 flex flex-col items-center z-10">
          <h1 className="text-4xl md:text-8xl font-bold leading-tight text-[#EE6C4D]">
            Ambos que te acompañan.
          </h1>
          <p className="text-[#293241] text-sm md:text-lg">
            Uniformes prácticos, con la calidad que necesitás para tu trabajo.
          </p>
          <button className="bg-[#3D5A80] text-[#F0F6F6] px-4 md:px-8 py-2 md:py-4 rounded-full font-semibold text-s md:text-base">
            VER CATÁLOGO
          </button>
        </div>
        <div className="relative md:w-1/2 h-screen md:h-[calc(100vh-4rem)]">
          <img src={Hero} className="relative h-full z-10 md:mr-20 object-cover"/>
          <div className="absolute bottom-0 right-0 w-[80%] h-[70%] bg-[#EE6C4D] z-0"></div>
        </div>
      </section>
      <div className="bg-black text-white w-full h-12 flex items-center justify-center">
        <p className="text:md">Cuotas sin interés</p>
      </div>
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {["HOMBRES", "MUJERES"].map((category) => (
          <div key={category} className="bg-white shadow-sm rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition"
          >
            <div className="bg-gray-200 h-40 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Imagen</span>
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Los favoritos de {category}
              </h2>
              <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-[#2F4858] transition">
                VER TODO
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}