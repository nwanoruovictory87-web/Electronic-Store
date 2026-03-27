import { useState } from "react";
import { UseOrderContext } from "../ContextApi/AppContextApi";
import StarReview from "../Home/StarReview";
import ProductDiscription from "./Discription";
function ItemsNameAndPrice(props) {
  const productData = UseOrderContext();
  const [qtyCount, setQtyCount] = useState(1);
  const { orderList, setOrdeList, orderCount, setOrderCount } = productData;
  const data = props.data;
  function priceX2() {
    const mainPrice = props.data.amount;
    const splitPice = mainPrice.split(",");
    const priceMultiplied = Math.floor(Number(splitPice[0]) * 1.3);
    return `${priceMultiplied},${splitPice[1]}`;
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
  function addProductsToCart(data) {
    const pass = isProductInCart(orderList, data);
    if (pass) return;
    setOrdeList((prevOrder) => {
      if (prevOrder.length !== 0) return [...prevOrder, data];
      return [data];
    });
    setOrderCount((prevCount) => (prevCount = prevCount + 1));
  }
  const orderPass = isProductInCart(orderList, props.data);
  const priceMultipled = priceX2();
  function addQty() {
    if (qtyCount === 99) return;
    setQtyCount((prevQty) => (prevQty += 1));
  }
  function reduceQty() {
    if (qtyCount === 1) return;
    setQtyCount((prevQty) => (prevQty -= 1));
  }
  return (
    <div className="flex justify-center ">
      <span className="w-[60%] max-w-[500px] min-h-60 max-h-fit mt-2.5 flex flex-col pb-4">
        <span>
          <h5 className="font-bold text-lg text-gray-800">{data.name}</h5>
        </span>
        <div className="flex mt-1.5">
          <span className="block ">
            <h5 className="text-xl font-semibold price-slash">
              &#8358;{priceMultipled}
            </h5>
            <h5 className="text-xl font-semibold text-green-700">
              &#8358;{data.amount}
            </h5>
          </span>
          <span className="ml-auto pr-3">
            <StarReview rating={3} />
          </span>
        </div>

        <span className="block mt-0.5">
          <h5 className="text-[1rem]">Avalability: in Stock</h5>
        </span>
        <span className="mt-1.5 flex">
          <span>
            <h5 className="text-lg font-semibold">Quantity</h5>
          </span>
          <span className="ml-2.5 w-28 h-8 border-2 border-gray-800 rounded-full flex pb-2">
            <h5
              className="text-lg font-semibold m-0 text-gray-800 ml-3 mr-auto mb-1"
              onClick={reduceQty}
            >
              -
            </h5>
            <h5 className="text-lg font-semibold m-0 text-gray-800 ">
              {qtyCount}
            </h5>
            <h5
              className="text-lg font-semibold m-0 text-gray-800 ml-auto mr-3 "
              onClick={addQty}
            >
              +
            </h5>
          </span>
        </span>
        {!orderPass ? (
          <span className=" mt-3 flex swicth-button">
            <span
              className="flex w-28 h-8 border-2 border-gray-800 rounded-full bg-[#e2a83d] hover:bg-[#ddb975d0]"
              onClick={() => addProductsToCart(props.data)}
            >
              <h5 className="text-lg ml-1 text-gray-100 mr-auto font-semibold">
                Add
              </h5>
              <span className="inline-block w-9 h-9 bg-gray-100 rounded-full pl-0.5  remove-xmark pt-1 mt-[-5px]">
                <i className="fa fa-plus text-[1.5rem] text-gray-800 pl-0.5"></i>
              </span>
            </span>
          </span>
        ) : (
          <span className=" mt-3 flex swicth-button">
            <span
              className="flex w-28 h-8 border-2 border-gray-800 rounded-full bg-[#d405058f] hover:bg-[#da0909]"
              onClick={() => removeOneProduct(props.data)}
            >
              <h5 className="text-lg ml-1 text-gray-100 mr-auto font-semibold">
                Remove
              </h5>
              <span className="inline-block w-9 h-9 bg-gray-100 rounded-full pl-0.5  remove-xmark pt-1 mt-[-5px]">
                <i className="fa fa-xmark text-[1.5rem] text-gray-800 pl-0.5"></i>
              </span>
            </span>
          </span>
        )}
        <ProductDiscription body={data} />
      </span>
    </div>
  );
}
export default ItemsNameAndPrice;
