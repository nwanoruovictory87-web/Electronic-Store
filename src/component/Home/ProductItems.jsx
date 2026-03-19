import ProductItem from "./ProductItem";

function ProductItems(props) {
  return (
    <div className="mt-3 ">
      <div className="flex gap-2 ml-2 mr-2 flex-wrap">
        {props.list.map((e, i) => {
          return <ProductItem body={e} key={i} />;
        })}
      </div>
    </div>
  );
}
export default ProductItems;
