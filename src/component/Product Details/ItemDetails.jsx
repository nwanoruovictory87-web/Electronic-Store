import Image from "/image/productImage.jpg";
function ItemDetails(props) {
  const data = props.data;
  return (
    <span className="flex mt-4 justify-center ">
      <span className="flex w-[60%] h-80 bg-yellow-300">
        <span className="w-12 h-12 bg-[#ebe8e8c7] rounded-full absolute mt-32 pl-2.5 pt-2.5 ml-4">
          <i className="fa fa-angle-left text-xl text-gray-600"></i>
        </span>
        <span className="w-full">
          <img className="w-[100%] h-80" src={data.image}></img>
        </span>
        <span className=" flex justify-end ">
          <span className=" absolute mt-3 mr-3 w-7 h-7 bg-gray-100 pl-1 pt-0.5 rounded-md">
            <h5 className="text-[1rem] font-semibold text-gray-800">1/3</h5>
          </span>
          <span className="w-12 h-12 bg-[#ebe8e8c7] rounded-full absolute mt-32 mr-4 pl-2.5 pt-2.5 ">
            <i className="fa fa-angle-right text-xl text-gray-600"></i>
          </span>
        </span>
      </span>
    </span>
  );
}
export default ItemDetails;
