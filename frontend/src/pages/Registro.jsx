import { useState } from "react";

export default function Registro() {
  const [mode, setMode] = useState("login");
  const onSubmit = (e) => e.preventDefault();

  return (
    <div className="h-full flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-[#2F4858] text-white text-center py-12">
        <div>
          <h1 className="text-2xl md:text-3xl">Bienvenido/a a</h1>
          <h1 className="text-4xl md:text-5xl font-semibold">Ambos Norte</h1>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center bg-white py-10">
        <div className="w-full max-w-xl px-12">
          {mode === "login" ? (
            <>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Iniciá sesión.</h2>
              <form onSubmit={onSubmit}>
                <input type="email" placeholder="Correo electrónico" className="w-full mb-6 bg-gray-100 rounded-full px-6 py-3 text-base" required />
                <input type="password" placeholder="Contraseña" className="w-full mb-6 bg-gray-100 rounded-full px-6 py-3 text-base" required />
                <button type="submit" className="w-full bg-[#353945] text-white py-3 rounded-full text-base font-semibold mb-6">
                  Iniciar sesión
                </button>
              </form>
              <p className="flex text-xs justify-center text-gray-500 hover:underline cursor-pointer">¿Olvidaste tu contraseña?</p>
              <p className="text-base mt-3 text-center"> ¿No tenés cuenta?{" "}
                <button type="button" onClick={() => setMode("register")} className="text-red-600 font-semibold hover:underline">
                  Registrate
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Creá tu cuenta.</h2>
              <form onSubmit={onSubmit} className="space-y-6">
                <input type="text" placeholder="Nombre y apellido" className="w-full bg-gray-100 rounded-full px-6 py-3 text-base" required />
                <input type="email" placeholder="Correo electrónico" className="w-full bg-gray-100 rounded-full px-6 py-3 text-base" required />
                <input type="password" placeholder="Contraseña nueva" className="w-full bg-gray-100 rounded-full px-6 py-3 text-base" required />
                <label className="flex items-center gap-2 text-sm text-gray-500">
                  <input type="checkbox" required />
                  <span>Acepto los Términos y Condiciones.</span>
                </label>
                <button type="submit" className="w-full bg-[#353945] text-white py-3 rounded-full text-base font-semibold">
                  Registrate
                </button>
              </form>
              <p className="text-base mt-6 text-center"> ¿Ya tenés cuenta?{" "}
                <button type="button" onClick={() => setMode("login")} className="text-red-600 font-semibold hover:underline">
                  Iniciá sesión
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}