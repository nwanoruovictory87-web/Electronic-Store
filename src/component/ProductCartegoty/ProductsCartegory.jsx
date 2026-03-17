import Catigoreview from "../Home/Catigoreview";
import SeachButton from "../Home/SearchButtton";
import TopHome from "../Home/Top";
import ProductCartegoryText from "./ProductsCartegoryText";
import ProductItems from "../Home/ProductItems";
import End from "../Home/End";

function ProductCategory() {
  return (
    <>
      <TopHome />
      <Catigoreview />
      <SeachButton />
      <ProductCartegoryText />
      <ProductItems />
      <End />
    </>
  );
}
export default ProductCategory;
