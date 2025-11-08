import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";

export default function Catalogo() {
  return (
    <section className="min-h-screen bg-[#F0F6F6] flex flex-col md:flex-row">
      <aside className="w-full md:w-96 bg-white border-gray-200">
        <CategoryFilter />
      </aside>
      <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 24 }).map((_, i) => (<ProductCard key={i} name="Ambo Azul" price="$100.000" />))}
      </main>
    </section>
  );
}