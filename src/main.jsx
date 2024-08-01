import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import MainLayout from "./layouts/MainLayout";

import { Toaster } from "sonner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [ //valor del outlet que es nuestro contenido variable
      { path: "/", element: <HomePage /> },
      { path: "/productos", element: <ProductsPage /> },
      { path: "/productos/:id", element: <ProductDetailPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="bottom-right" richColors />
    <RouterProvider router={router} />
  </>
);
