import TopHome from "../Home/Top";
import Catigoreview from "../Home/Catigoreview";
import SeachButton from "../Home/SearchButtton";
import ProductCatigory from "../Home/ProductsCatigory";
import ItemDetails from "./ItemDetails";
import ItemsNameAndPrice from "./ItemesNameAndPrice";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./../../../public/style/ProductDetails.css";

function ProductDetails() {
  return (
    <>
      <TopHome />
      <Catigoreview />
      <SeachButton />
      <ProductCatigory />
      <ItemDetails />
      <ItemsNameAndPrice />
      <RelatedProducts />
    </>
  );
}
export default ProductDetails;
