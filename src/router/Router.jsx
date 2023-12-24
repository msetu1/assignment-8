import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Gallery from "../pages/Gallery";
import Products from "../pages/Products";
import Workshop from "../pages/Workshop";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import PrivateProvider from "../providers/PrivateProvider";
import Dashboard from "../dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/workshop",
        element: <Workshop></Workshop>,
        loader: () => fetch('/workshop.json')
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateProvider>
        <Dashboard></Dashboard>
      </PrivateProvider>
    ),
  },
]);

export default router;
