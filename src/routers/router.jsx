import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Product from "../pages/Product"
import ProtectedRoute from "./protectedRouter";
import { getProducts } from "../api/productApi"
export default createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Product />, loader :getProducts, },
     
     
    ],
  },
]);