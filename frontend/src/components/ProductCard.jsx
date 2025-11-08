import { Link } from "react-router-dom";

export default function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
      <img src={image} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-base font-semibold">{name}</h3>
      <p className="text-gray-600 mb-3">{price}</p>
      <Link to="/producto" className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
        COMPRAR </Link>
    </div>
  );
}