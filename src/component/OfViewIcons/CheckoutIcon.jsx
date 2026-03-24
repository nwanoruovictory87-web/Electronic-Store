function CheckOutIcon(props) {
  return (
    <div className="">
      <span className="checkout-icon fixed right-0 bottom-52 mr-4 z-50">
        <span className="bg-[#ecce26de] w-16 h-16 rounded-full flex justify-center pt-4">
          <span
            className="w-8 h-8 inline-block rounded-full absolute text-xl pl-2.5 ml-[-20px] mt-[-15px] text-gray-100 bg-blue-700"
            onClick={props.func}
          >
            {props.count}
          </span>
          <i
            className="fas fa-shopping-cart text-4xl text-[#1a1919b4]"
            onClick={props.func}
          ></i>
        </span>
      </span>
    </div>
  );
}
export default CheckOutIcon;
