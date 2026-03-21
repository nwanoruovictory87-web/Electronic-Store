import ProductItem from "./ProductItem";

function ProductItems(props) {
  return (
    <div className="mt-3 ">
      <div className="flex gap-2 ml-2 mr-2 flex-wrap scroll-smooth justify-between">
        {props.list &&
          props.list.map((e, i) => {
            return (
              <ProductItem body={e} key={i} rerenderFunc={props.rerenderFunc} />
            );
          })}
      </div>
    </div>
  );
}
export default ProductItems;
