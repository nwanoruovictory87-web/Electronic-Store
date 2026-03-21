import RelatedText from "./RelatedText";
import End from "../../Home/End";
import ProductItems from "../../Home/ProductItems";
import { useState, useEffect, lazy, Suspense } from "react";
import ProductLoading from "../../LazyLoadingUi/ProductLoading";

function RelatedProducts(props) {
  const [productslist, setProductList] = useState(null);
  const list = props.list;
  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffled = [...array];
      let currentIndex = shuffled.length,
        randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [shuffled[currentIndex], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[currentIndex],
        ];
      }
      return shuffled;
    };
    const itemList = shuffleArray(list);
    if (itemList) {
      (() => {
        setProductList((prevList) => (prevList = itemList));
      })();
    }
  }, [list]);
  return (
    <>
      <RelatedText />

      {productslist && (
        <ProductItems list={productslist} rerenderFunc={props.rerenderFunc} />
      )}

      <End />
    </>
  );
}
export default RelatedProducts;
