import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import CreateOrder from "./pages/order/CreateOrder";
import Order from "./pages/order/Order";
import AppLayout from "./components/AppLayout";

// import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
