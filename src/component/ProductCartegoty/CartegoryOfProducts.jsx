import TopHome from "../Home/Top";
import Catigoreview from "../Home/Catigoreview";
import SeachButton from "../Home/SearchButtton";
import ProductLoading from "../LazyLoadingUi/ProductLoading";
import ProductCatigory from "../Home/ProductsCatigory";
import End from "../Home/End";
import { lazy, Suspense } from "react";
const ProductsCartegory = lazy(() => import("./ProductsCartegory"));
function CartegoryOfProduct() {
  return (
    <>
      <TopHome />
      <Catigoreview />
      <SeachButton />
      <ProductCatigory category={window.location.pathname.split("/")[3]} />
      {
        <Suspense fallback={<ProductLoading />}>
          <ProductsCartegory />
        </Suspense>
      }
      <End />
    </>
  );
}
export default CartegoryOfProduct;
