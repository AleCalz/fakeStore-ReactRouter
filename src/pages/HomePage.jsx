import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className=" ">
      <p className="w-full text-center bg-teal-600 font-bold text-4xl text-black p-4">
        Home Page
      </p>
      <div className="flex gap-6 bg-slate-400 text-black font-semibold p-2 justify-around">
        <Link to="/login" className=" hover:text-slate-300 ">
          Login
        </Link>
        <Link to="/productos" className=" hover:text-slate-300">
          Productos
        </Link>
        {/* <Link to="/productos/:id">ProductDetail</Link> */}
      </div>
    </div>
  );
}
