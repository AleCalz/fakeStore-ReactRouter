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
        console.log(prod);
        setProduct(prod)
        console.log(product);

      })
      .catch((error) => {
        toast.error("Error al obtener el producto");
        console.error("[getProductById error]", error);
      });
  }, [id, product]);

  return (
    <main>
      <h1>Product Detail Page: {id}</h1>
      <section>
        {
          product.map((prod) => {
            return (
              <div key={`key-${prod}`}>
                <img src="" alt="" />
                <p>{prod.title}</p>
              </div>
            );
          })
        }
      </section>
    </main>
  );
}
