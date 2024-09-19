import { Link } from "react-router-dom";

export default function Card({ header, desc, bg, link, linkText }) {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{header}</h2>
      <p className="mt-2 mb-4">{desc}</p>
      <Link
        to={link}
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {linkText}
      </Link>
    </div>
  );
}
