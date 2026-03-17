import "./index.css";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product Details/ProductDetails";
import ProductCategory from "./component/ProductCartegoty/ProductsCartegory";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
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
