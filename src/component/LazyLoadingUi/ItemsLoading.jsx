function ItemsLoading() {
  return (
    <span className="product-item flex flex-col bg-[#fffffff5] w-[10.5rem] max-w-60 min-h-[375px] max-h-fit p-1.5 rounded-md flex-grow pb-2">
      {/**product image */}
      <span>
        <img className="w-full h-[10rem] skeleton-loading"></img>
      </span>
      {/**Category  and product name*/}
      <span className="mt-2 flex flex-col pl-3 border-b-2 pb-2.5">
        <h5 className="text-lg m-0 text-gray-600"></h5>
        <h5 className="text-xl font-bold m-0 text-gray-600"></h5>
      </span>
      {/**product pricing */}
      <span className="flex flex-col pl-3 mt-1 gap-2">
        <h5 className="text-lg price-slash skeleton-loading mr-2 h-6"></h5>
        <h5 className="text-lg text-green-700 skeleton-loading mr-2 h-6"></h5>
      </span>
      {/**stock status */}
      <span className="flex justify-end pr-1 ">
        <h5 className=" text-[14px] text-blue-700 font-bold skeleton-loading h-4 w-12 mt-4 mb-2"></h5>
      </span>
      {/**order button */}

      <span className="swicth-button w-full block mt-1 pl-2 pr-2 overflow-hidden">
        <span className="skeleton-loading w-full h-10 rounded-3xl flex pl-3.5 overflow-hidden p-1 ">
          <h5 className="text-gray-800 font-bold text-[0.8rem]  mt-1.5"></h5>
          <span className="inline-block w-8 h-8 bg-gray-100 rounded-full pl-1 remove-xmark ml-auto pt-0.5 skeleton-loading"></span>
        </span>
      </span>
    </span>
  );
}
export default ItemsLoading;
