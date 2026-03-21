import TopHome from "./Top";
import Catigoreview from "./Catigoreview";
import SeachButton from "./SearchButtton";
import End from "./End";
import "../../../public/style/Home.css";
import ProductCatigory from "./ProductsCatigory";
import ProductLoading from "../LazyLoadingUi/ProductLoading";
import { lazy, Suspense, useEffect } from "react";
const Products = lazy(() => import("./Products"));
function Home() {
  useEffect(() => {
    document.body.style.overflow = "";
  }, []);
  return (
    <>
      <TopHome />
      <Catigoreview />
      <SeachButton />
      <ProductCatigory category={"ALL PRODUCTS"} />
      <Suspense fallback={<ProductLoading />}>
        <Products />
      </Suspense>
      <End />
    </>
  );
}
export default Home;
