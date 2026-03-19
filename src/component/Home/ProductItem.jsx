import { useNavigate } from "react-router-dom";
function ProductItem(props) {
  const urlNavigator = useNavigate();
  function productDetails(c, i) {
    const url = `/products/${c}/${i}`;
    if (window.location.pathname.split("/").length > 3) {
      urlNavigator(url, { replace: true });
    } else {
      urlNavigator(url, { replace: false });
    }
    if (props.rerenderFunc) {
      const id = [
        window.location.pathname.split("/")[3],
        window.location.pathname.split("/")[4],
      ];
      const callRender = props.rerenderFunc;
      return callRender(id, true);
    }
  }
  return (
    <span
      className="product-item flex flex-col bg-[#fffffff5] w-[10.5rem] max-w-60 min-h-[375px] max-h-fit p-1.5 rounded-md flex-grow pb-2"
      onClick={() => productDetails(props.body.category, props.body.index)}
    >
      {/**product image */}
      <span>
        <img className="w-full h-[10rem]" src={props.body.image}></img>
      </span>
      {/**Category  and product name*/}
      <span className="mt-2 flex flex-col pl-3 border-b-2 pb-2.5">
        <h5 className="text-lg m-0 text-gray-600">{props.body.category}</h5>
        <h5 className="text-xl font-bold m-0 text-gray-600">
          {props.body.name}
        </h5>
      </span>
      {/**product pricing */}
      <span className="flex flex-col pl-3 mt-1">
        <h5 className="text-lg price-slash ">&#8358;13,000,000</h5>
        <h5 className="text-lg text-green-700">&#8358;{props.body.amount}</h5>
      </span>
      {/**stock status */}
      <span className="flex justify-end pr-1 ">
        <h5 className=" text-[14px] text-blue-700 font-bold">in Stock </h5>
      </span>
      {/**order button */}
      <span className="w-full block mt-1 pl-2 pr-2 overflow-hidden">
        <span className="bg-[#e2a83dab] w-full h-10 rounded-3xl flex pl-3.5 overflow-hidden p-1">
          <h5 className="text-gray-800 font-bold text-[0.8rem]  mt-1.5">
            ADD TO CART
          </h5>
          <span className="inline-block w-8 h-8 bg-gray-100 rounded-full pl-1.5 remove-xmark ml-auto  pt-1">
            <i className="fa fa-shopping-cart text-lg text-gray-800 "></i>
          </span>
        </span>
      </span>
    </span>
  );
}
export default ProductItem;
