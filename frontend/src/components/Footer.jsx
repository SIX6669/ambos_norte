export default function Footer({ fixed = false }) {
  return (
    <footer className={`${fixed ? "absolute bottom-0 left-0" : "relative"} h-12 md:h-16 w-full bg-black text-white text-center text-sm flex justify-center items-center`}>
      <p>
        Ambos Norte © {new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  );
}