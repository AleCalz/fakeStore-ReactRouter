import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export default function ProductsPage() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("termino de renderizar");
  // }, []);

  // useEffect(() => {
  //   console.log("useefect count, ", count);
  // }, [count]);

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Debes iniciar sesion");
      navigate("/login");
      return;
    }

    getProducts()
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        toast.error("Error al obtener los productos");
        console.error("[getProducts error]", error);
      });
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-4xl font-semibold text-center">Productos</h1>
      <section className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 lg:gris-cols-5 gap-4">
        {products.map((product, idx) => {
          return (
            <article
              key={`prod-${idx}`}
              className="hover:bg-white/10 cursor-pointer rounded p-4 flex flex-col justify-between"
            >
              <img src={product.thumbnail} alt={product.title} />
              <p className="text-center p-1">{product.title}</p>
              <Link
                to={`/productos/${product.id}`}
                className="bg-white/50 w-full p-2 rounded text-center"
              >
                Ver detalle
              </Link>
            </article>
          );
        })}
      </section>
      {/* <button onClick={() => setCount(count + 1)}>count: {count}</button> */}
    </main>
  );
}
