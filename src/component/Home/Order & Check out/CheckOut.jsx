function CheckOut(props) {
  const orderlist = props.list;
  function getPrice(list) {
    const ordersAmount = list.map((e) => e.amount.split(",").join(""));
    const ordersAmountPlus = [];
    for (let i = 0; i < ordersAmount.length; i++) {
      if (i === ordersAmount.length - 1) {
        const data = `${ordersAmount[i]}`;
        ordersAmountPlus.push(data);
      } else {
        const data = `${ordersAmount[i]}+`;
        ordersAmountPlus.push(data);
      }
    }
    const result = eval(ordersAmountPlus.join(""));
    return result;
  }
  const amount = getPrice(orderlist) && getPrice(orderlist).toLocaleString();
  return (
    <div className="w-full flex flex-col fixed bottom-0 pb-10 bg-[#f3ebc0ec]">
      <span className="flex pl-5 pr-5 border-t-2 border-b-2 pt-3 pb-3 border-gray-800">
        <h5 className="text-lg font-semibold text-gray-500 mr-auto ">Total:</h5>
        <h5 className="text-lg font-semibold text-gray-500 sm:min-[1300px]:mr-[50px]">
          &#8358;{amount ? amount : "0.00"}
        </h5>
      </span>
      <span className="pl-5 pr-5 mt-7 flex justify-center">
        <button className="w-full max-w-[700px] h-16 rounded-full bg-[#27b9279d] font-semibold text-gray-700 text-xl ">
          CHECK OUT
          <i className="fa-brands fa-whatsapp text-xl font-semibold text-gray-700 pl-1"></i>
        </button>
      </span>
    </div>
  );
}
export default CheckOut;
