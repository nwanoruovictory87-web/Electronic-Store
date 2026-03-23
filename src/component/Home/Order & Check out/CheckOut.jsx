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
  function checkOut(itemNames, totalPrice, totalQountity) {
    const orderTemblet = `https://wa.me/2348066869429?text=Hello%20%F0%9F%91%8B%0A%0AI%20would%20like%20to%20place%20an%20order.%20Please%20find%20the%20details%20below%3A%0A%0A%F0%9F%9B%92%20*Order%20Details*%0A%E2%80%A2%20Item%20Name%3A%20${itemNames}%0A%E2%80%A2%20Price%3A%20%E2%82%A6${totalPrice}%0A%E2%80%A2%20Quantity%3A%202%0A%0A%F0%9F%92%B0%20*Total%3A*%20%E2%82%A6${totalPrice}%0A%0A%F0%9F%93%A6%20*Availability%20Check*%0AIs%20this%20item%20currently%20available%3F%0A%0A%F0%9F%A7%BE%20*Order%20Receipt*%0Aabiyaelectronics.store%2Forder%2Freceipt%2F89mt.example%0A%0APlease%20confirm%20the%20order%2C%20delivery%20details%2C%20and%20payment%20process.%0A%0AThank%20you!`;
    window.open(orderTemblet, "_blank", "noopener, noreferrer");
  }
  return (
    <div className="w-full flex flex-col fixed bottom-0 pb-10 bg-[#f3ebc0ec]">
      <span className="flex pl-5 pr-5 border-t-2 border-b-2 pt-3 pb-3 border-gray-800">
        <h5 className="text-lg font-semibold text-gray-500 mr-auto ">Total:</h5>
        <h5 className="text-lg font-semibold text-gray-500 sm:min-[1300px]:mr-[50px]">
          &#8358;{amount ? amount : "0.00"}
        </h5>
      </span>
      <span className="pl-5 pr-5 mt-7 flex justify-center">
        <button
          className="w-full max-w-[700px] h-16 rounded-full bg-[#27b9279d] font-semibold text-gray-700 text-xl "
          onClick={() => checkOut(orderlist[0].name, amount)}
        >
          CHECK OUT
          <i className="fa-brands fa-whatsapp text-xl font-semibold text-gray-700 pl-1"></i>
        </button>
      </span>
    </div>
  );
}
export default CheckOut;
