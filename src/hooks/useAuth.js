import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function useAuth() {
  const navigate = useNavigate();
  const [token, setToken] = useState('')

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token)

    if (!token) {
      toast.error("Debes iniciar sesion de nuevo");
      navigate("/login");
    }
  }, [navigate]);
  return token
}
// export function useAuth() {
//   const navigate = useNavigate();

//   //podrian existir estados tmb
//   // const [] = useState()

//   //queremos que se realice la validacion al terminar de cargar el componente
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("Debes iniciar sesion de nuevo");
//       navigate("/login");
//     }
//   }, [navigate]);
//   /**
//    * dependemos del navigate, porque esta fuera del useEfect y
//    * la estamos ocupando dentro de useEfect
//    */

// }

