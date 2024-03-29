import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import User from "../pages/User";
import Order from "../pages/Order";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../components/Login";
import Signup from "../pages/Signup";

export type RouteObject = {
  path: string;
  element: React.ElementType;
  index?: boolean;
};

export const routes = [
  { path: "/", element: Home, index: true },
  { path: "/products", element: Products },
  { path: "/products/:id", element: Product },
  { path: "/user", element: User },
  { path: "/order", element: Order },
  { path: "/cart", element: Cart },
  { path: "/checkout", element: Checkout },
];
