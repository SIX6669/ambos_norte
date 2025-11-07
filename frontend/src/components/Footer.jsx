export default function Footer({ fixed = false }) {
  return (
    <footer className={`${fixed ? "absolute bottom-0 left-0" : "relative"} w-full bg-black text-white text-center text-sm py-3`}>
      <p>
        Ambos Norte © {new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  );
}