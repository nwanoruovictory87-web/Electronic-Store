function ProductDiscription({ body }) {
  return (
    <div className="mt-3">
      <span className="flex flex-col w-full h-32 bg-[#bdb10f52] rounded-xl p-2">
        <span>
          <h5 className="text-lg font-semibold text-gray-800">Description</h5>
        </span>
        <div className="pl-1">
          <span className="flex">
            <h5 className="text-[1rem] font-semibold text-gray-700">Brand:</h5>
            <h5 className="text-[1rem] ml-1.5 text-gray-700 font-semibold">
              {body.brand}
            </h5>
          </span>
          <span className="flex ">
            <h5 className="text-[1rem] text-gray-700 font-semibold">lenght</h5>
            <h5 className="text-[1rem] ml-1.5 text-gray-700 font-semibold">
              24inch
            </h5>
          </span>
          <span className="flex ">
            <h5 className="text-[1rem] text-gray-700 font-semibold">Color</h5>
            <h5 className="text-[1rem] ml-1.5 text-gray-700 font-semibold">
              Black
            </h5>
          </span>
        </div>
      </span>
    </div>
  );
}
export default ProductDiscription;
