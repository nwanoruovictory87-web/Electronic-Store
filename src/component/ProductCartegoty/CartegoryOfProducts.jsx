import TopHome from "../Home/Top";
import Catigoreview from "../Home/Catigoreview";
import SeachButton from "../Home/SearchButtton";
import ProductLoading from "../LazyLoadingUi/ProductLoading";
import ProductCatigory from "../Home/ProductsCatigory";
import { useParams } from "react-router-dom";
import End from "../Home/End";
import { lazy, Suspense } from "react";
const ProductsCartegory = lazy(() => import("./ProductsCartegory"));
function CartegoryOfProduct() {
  const { id } = useParams();
  const category = id;

  return (
    <>
      <TopHome />
      <Catigoreview />
      <SeachButton />
      <ProductCatigory category={category} />
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
