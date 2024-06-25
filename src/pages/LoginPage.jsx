import { toast } from "sonner";
import { login } from "../api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {

  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login(data.username, data.password);
      window.localStorage.setItem("token", token);
      toast.success('Login Correcto')
      navigate('/productos')
    } catch (error) {
      toast.error("Errpr al iniciar sesion");
      console.error("[login Error]", error);
    }
  }

  return (
    <main className="flex justify-center items-center flex-col w-full min-h-dvh">
      <p className="text-4xl font-bold text-center">Login</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-white/50 border rounded p-4 flex flex-col gap-4 max-w-sm w-ful"
      >
        <input
          type="text"
          className="border-white/50 rounded text-black p-2"
          placeholder="Correo"
          {...register("username", {
            required: { value: true, message: "Nombre de user requerido" },
          })}
        />
        <input
          type="password"
          placeholder="passsword"
          className="border-white/50 rounded p-2 text-black"
          {...register("password", {
            required: { value: true, message: "password requerido" },
          })}
        />
        <button className="bg-teal-500 p-2 text-black rounded hover:bg-teal-300">
          Ingresar
        </button>
      </form>
    </main>
  );
}
