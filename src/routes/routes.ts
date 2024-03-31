import Home from "../pages/Home";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import User from "../pages/User";
import Order from "../pages/Order";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

export type RouteObject = {
  path: string;
  element: React.ElementType;
  index?: boolean;
};

export const routes = [
  { path: "/", element: Home, index: true },
  { path: "/products", element: Products },
  { path: "/products/:id", element: SingleProduct },
  { path: "/user", element: User },
  { path: "/order", element: Order },
  { path: "/cart", element: Cart },
  { path: "/checkout", element: Checkout },
];
