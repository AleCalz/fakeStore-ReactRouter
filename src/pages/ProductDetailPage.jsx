import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIdProduct } from "../api";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getByIdProduct(id)
      .then((prod) => {
        setProduct(prod);
      })
      .catch((error) => {
        toast.error("Error al obtener el producto");
        console.error("[getProductById error]", error);
      });
  }, [id]);

  return (
    <main className="min-h-screen max-w-screen-md m-auto flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-2xl pb-3">Product Detail</h1>
      <section className="bg-[#F05D23] p-5 rounded ">
        <article
          key={`key-${product.id}`}
          className="bg-white flex flex-col md:flex-row p-4 rounded-lg"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className=" bg-black/15 rounded mb-3 md:mb-0"
          />
          <div className="md:ml-3 flex flex-col justify-between md:p-3">
            <p className="bg-gray-800 text-white p-1 rounded-lg font-bold text-center md:text-xl">
              {product.title}
            </p>
            <div className="flex">
              <p className="mt-2 text-lg font-bold mr-auto  text-black p-2 rounded">
                💲{product.price}
              </p>
              <p className="mt-2 text-gray-600 text-xl ml-auto bg-black/10 items-center flex rounded-3xl px-4 border cursor-pointer select-none">
                {product.category}
              </p>
            </div>
            <p className="mt-2 text-justify text-black/60 font-medium ">
              {product.description}
            </p>
            <button className="bg-red-500/80 hover:bg-red-500 hover:font-bold  p-2 rounded select-none">
              ADD TO CART
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
