import "./index.css";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product Details/ProductDetails";
import CartegoryOfProduct from "./component/ProductCartegoty/CartegoryOfProducts";
import OrderList from "./component/Home/Order & Check out/OrderList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id/:id/",
        element: <ProductDetails />,
      },
      {
        path: "/cartegory/:id",
        element: <CartegoryOfProduct />,
      },
      {
        path: "/order/list",
        element: <OrderList />,
      },
    ],
    {
      basename: "/Electronic-Store/",
    },
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
