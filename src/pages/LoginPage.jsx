import { toast } from "sonner";
import { login } from "../api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login(data.username, data.password);
      if (token) {
        window.localStorage.setItem("token", token);
        toast.success("Login Correcto");
        navigate("/productos");
      } else {
        toast.error("Usuario o password incorrecto");

        setError("root.credentials", {
          type: "manual",
          message: "Credenciales invalidas",
        });
        // setError("username", {
        //   type: "manual",
        //   message: "usuario invalido",
        // });
      }
    } catch (error) {
      toast.error("Errpr al iniciar sesion");
      console.error("[login Error]", error);
    }
  }

  function handleShowHandlePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <main className="flex justify-center items-center flex-col w-full min-h-dvh">
      <p className="text-4xl font-bold text-center">Login</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          "border border-white/50  rounded p-4 flex flex-col gap-4 max-w-sm w-ful",
          {
            "border-red-500": errors.root?.credentials, // ? significa: si existe root ingresa a credentials
          }
        )}
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
          type={showPassword ? "text" : "password"}
          placeholder="passsword"
          className="border-white/50 rounded p-2 text-black"
          {...register("password", {
            required: { value: true, message: "password requerido" },
          })}
        />
        <span
          className="text-sm text-white cursor-pointer hover:text-white"
          onClick={handleSubmit(handleShowHandlePassword)}
        >
          {showPassword ? "🙈 Ocultar" : "🙉 Mostrar"} password
        </span>
        <button className="bg-teal-500 p-2 text-black rounded hover:bg-teal-300">
          Ingresar
        </button>
        {errors.root?.credentials && (
          <p className="text-red-500 text-center">Credenciales invalidas</p>
        )}
      </form>
    </main>
  );
}
