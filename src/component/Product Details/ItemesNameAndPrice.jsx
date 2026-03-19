function ItemsNameAndPrice(props) {
  const data = props.data;
  return (
    <div className="flex justify-center ">
      <span className="w-[60%] h-60 mt-2.5 flex flex-col">
        <span>
          <h5 className="font-bold text-lg text-gray-800">{data.name}</h5>
        </span>
        <span className="block mt-1.5">
          <h5 className="text-xl font-semibold text-green-700">
            &#8358;{data.amount}
          </h5>
        </span>
        <span className="block mt-0.5">
          <h5 className="text-lg">Avalability: in Stock</h5>
        </span>
        <span className="mt-1.5 flex">
          <span>
            <h5 className="text-lg font-semibold">Quantity</h5>
          </span>
          <span className="ml-2.5 w-28 h-8 border-2 border-gray-800 rounded-full flex pb-2">
            <h5 className="text-lg font-semibold m-0 text-gray-800 ml-3 mr-auto mb-1">
              -
            </h5>
            <h5 className="text-lg font-semibold m-0 text-gray-800 ">1</h5>
            <h5 className="text-lg font-semibold m-0 text-gray-800 ml-auto mr-3 ">
              +
            </h5>
          </span>
        </span>
        <span className=" mt-3 flex">
          <span className="flex w-28 h-8 border-2 border-gray-800 rounded-full bg-[#d405058f]">
            <h5 className="text-lg ml-1 text-gray-100 mr-auto font-semibold">
              Remove
            </h5>
            <span className="inline-block w-7 h-7 bg-gray-100 rounded-full pl-0.5  remove-xmark">
              <i className="fa fa-xmark text-lg text-gray-800 "></i>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}
export default ItemsNameAndPrice;
