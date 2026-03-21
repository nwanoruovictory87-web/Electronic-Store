import { useNavigate } from "react-router-dom";
import { UseOrderContext } from "../ContextApi/AppContextApi";
function ProductItem(props) {
  const productData = UseOrderContext();
  const { setOrdeList, setOrderCount, orderList } = productData;
  const productsInfor = props.body;
  const urlNavigator = useNavigate();
  function addProductsToCart(data) {
    const pass = isProductInCart(orderList, data);
    if (pass) return;
    setOrdeList((prevOrder) => {
      if (prevOrder.length !== 0) return [...prevOrder, data];
      return [data];
    });
    setOrderCount((prevCount) => (prevCount = prevCount + 1));
  }
  function isProductInCart(orderList, data) {
    let result = false;
    for (let i = 0; i < orderList.length; i++) {
      if (
        orderList[i].index === data.index &&
        orderList[i].category === data.category
      ) {
        result = true;
        continue;
      }
    }
    return result;
  }
  const orderPass = isProductInCart(orderList, props.body);
  function productDetails(c, i) {
    const url = `/products/${c}/${i}/`;
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
  function priceX2() {
    const mainPrice = props.body.amount;
    const splitPice = mainPrice.split(",");
    const priceMultiplied = Math.floor(Number(splitPice[0]) * 1.3);
    return `${priceMultiplied},${splitPice[1]}`;
  }
  const priceMultipled = priceX2();
  function removeOneProduct(data) {
    setOrdeList((prevList) => {
      const oldList = [...prevList];
      const newList = [];
      for (let i = 0; i < oldList.length; i++) {
        if (
          !(
            oldList[i].category === data.category &&
            oldList[i].index === data.index
          )
        ) {
          newList.push(oldList[i]);
        }
      }
      return (prevList = newList);
    });
    setOrderCount((prevCount) => (prevCount -= 1));
  }
  return (
    <span
      className="product-item flex flex-col bg-[#fffffff5] w-[10.5rem] max-w-60 min-h-[375px] items-stretch p-1.5 rounded-md flex-grow pb-2"
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
        <h5 className="text-lg price-slash ">&#8358;{priceMultipled}</h5>
        <h5 className="text-lg text-green-700">&#8358;{props.body.amount}</h5>
      </span>
      {/**stock status */}
      <span className="flex justify-end pr-1 ">
        <h5 className=" text-[14px] text-blue-700 font-bold">in Stock </h5>
      </span>
      {/**order button */}
      {!orderPass ? (
        <span
          className="swicth-button  w-full h-10 rounded-3xl flex pl-3.5 overflow-hidden p-1 bg-[#e2a83dab]"
          onClick={() => addProductsToCart(productsInfor)}
        >
          <h5 className="text-gray-800 font-bold text-[0.8rem]  mt-1.5">
            ADD TO CART
          </h5>
          <span className="inline-block w-8 h-8 bg-gray-100 rounded-full pl-1.5 remove-xmark ml-auto  pt-1">
            <i className="fa fa-shopping-cart text-lg text-gray-800 "></i>
          </span>
        </span>
      ) : (
        <span className="swicth-button w-full block mt-1 pl-2 pr-2 overflow-hidden">
          <span
            className="bg-[#da090996] w-full h-10 rounded-3xl flex pl-3.5 overflow-hidden p-1 "
            onClick={() => removeOneProduct(productsInfor)}
          >
            <h5 className="text-gray-800 font-bold text-[0.8rem]  mt-1.5">
              REMOVE
            </h5>
            <span className="inline-block w-8 h-8 bg-gray-100 rounded-full pl-1 remove-xmark ml-auto pt-0.5">
              <i className="fa fa-xmark text-xl text-gray-800 "></i>
            </span>
          </span>
        </span>
      )}
    </span>
  );
}
export default ProductItem;
