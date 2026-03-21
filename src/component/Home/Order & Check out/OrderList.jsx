import { useNavigate } from "react-router-dom";
import ProductView from "./ProductView";
import CheckOut from "./CheckOut";
import { UseOrderContext } from "../../ContextApi/AppContextApi";

function OrderList() {
  const urlNavigator = useNavigate();
  const productData = UseOrderContext();
  const { orderList, setOrdeList, orderCount, setOrderCount } = productData;
  function toBase() {
    const url = "/"; // base
    urlNavigator(url, { replace: true });
  }
  function removeAllOrder() {
    setOrdeList([]);
    setOrderCount(0);
  }
  return (
    <div>
      <div className="bg-[#f3ebc0ec] min-h-screen max-h-fit scroll-smooth">
        <span className="flex w-full h-14  items-center border-b-2 border-gray-500 sticky top-0 bg-[#f3ebc0ec]">
          <span className="mr-auto ml-10 flex" onClick={toBase}>
            <h5 className="text-lg font-semibold mr-1">Close Cart</h5>
            <i className="fa fa-xmark text-lg" onClick={toBase}></i>
          </span>
          <span className="mr-10 flex" onClick={removeAllOrder}>
            <h5 className="text-lg font-semibold mr-1">Clear Cart</h5>
            <i className="fa fa-trash text-lg"></i>
          </span>
        </span>
        {/**items view */}
        <span>
          {orderList &&
            orderList.map((e, i) => {
              return <ProductView body={e} key={i} />;
            })}

          <div className="w-full h-48"></div>
          <CheckOut />
        </span>
      </div>
    </div>
  );
}
export default OrderList;
