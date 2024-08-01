import { Link, Outlet, useNavigate } from "react-router-dom";

const links = [
  { to: "/", label: "Home", authRequired: false },
  { to: "/productos", label: "Productos", authRequired: true },
  { to: "/login", label: "Login", authRequired: false },
];
export default function MainLayout() {
  const navigate = useNavigate()
  const isAuth = !!localStorage.getItem("token");
  //doble negacion
  // x -> 'dfddbdb' devolveria una cadena de texto, con la doble negacion se hace boleano,
  //                al hacerlo !! no alteramos el resultado
  // !x -> false
  // !!x -> true

  function handleLogOut() {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <main className="h-full min-h-dvh">
      <nav className="bg-white/50 flex flex-row justify-around p-1 text-lg font-semibold">
        {links.map((link) => {
          // Si requiere auth y no estoy loggeado...
          if (link.authRequired && !isAuth) return null;

          //si estamos loggeados y quiere renderizar login no lo cargues
          if (isAuth && link.to === "/login") return null;

          return (
            <Link
              key={`link-${link.to}`}
              to={link.to}
              className="p-1 hover:bg-black/50 w-full h-full text-center"
            >
              {link.label}
            </Link>
          );
        })}
        {isAuth && (
          <button onClick={handleLogOut} className="p-1 hover:bg-black/50 w-full h-full text-center">
            Salir
          </button>
        )}
      </nav>
      <Outlet />
      <footer className="w-full bg-teal-700 text-center text-black ">
        este es el footer
      </footer>
    </main>
  );
}
