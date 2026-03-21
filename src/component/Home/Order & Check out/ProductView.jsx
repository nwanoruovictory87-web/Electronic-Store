import { UseOrderContext } from "../../ContextApi/AppContextApi";

function ProductView(props) {
  const productData = UseOrderContext();
  const { orderList, setOrdeList, orderCount, setOrderCount } = productData;

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
  //console.log(props);
  return (
    <span className="flex w-full flex-grow pl-5 pr-5 mt-5 gap-2.5 flex-wrap">
      <span className=" w-[40%] max-w-96 h-44">
        <img className="w-full max-w-96 h-full " src={props.body.image}></img>
      </span>
      <span className="m-0 w-[30%]">
        <h5 className="text-lg font-semibold">{props.body.name}</h5>
      </span>
      <span className="flex flex-col">
        <span className="flex ">
          <h5 className="text-lg font-semibold text-gray-500 mr-1">Price:</h5>
          <h5 className="text-lg font-semibold text-gray-500">
            &#8358;{props.body.amount}
          </h5>
        </span>
        <span className="flex ">
          <h5 className="text-lg font-semibold text-gray-500 mr-1">Qty:</h5>
          <h5 className="text-lg font-semibold text-gray-500">2</h5>
        </span>
      </span>
      <span className="flex"></span>
      <span>
        <i
          className="fa fa-trash text-lg ml-8"
          onClick={() => removeOneProduct(props.body)}
        ></i>
      </span>
    </span>
  );
}
export default ProductView;
