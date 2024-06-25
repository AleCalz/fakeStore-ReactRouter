import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <p>Home Page</p>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/productos">Ptoductos</Link>
        <Link to="/productos/123">producto 123</Link>
      </div>
    </div>
  );
}
