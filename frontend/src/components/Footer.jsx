export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full h-12 bg-black text-white py-3 text-center text-sm">
      <p>
        Ambos Norte © {new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  );
}