import Menu from "./Menu/Menu";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UseOrderContext } from "../ContextApi/AppContextApi";
//
function TopHome() {
  const urlNavigator = useNavigate();
  const productContext = UseOrderContext();
  const { orderCount } = productContext;
  const menuDiv = useRef(null);
  function displayMenuOne() {
    menuDiv.current.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  function displayMenuOff() {
    menuDiv.current.style.display = "none";
    document.body.style.overflow = ""; // or 'visible' or 'auto'
  }
  function toOrderList() {
    const url = "/order/list";
    urlNavigator(url, { replace: false });
  }
  return (
    <div className="ml-2 mr-2">
      {/*store name*/}
      <span className="flex p-2 border-b-2">
        <h2 className="text-xl text-[#0000ff77] ">
          Welcome to victorystore.com
        </h2>
      </span>
      {/*menu bar*/}
      <div className="flex mt-2 bg-[#1a191965] h-12 p-1.5">
        <span className="mr-auto pl-1 flex flex-col">
          <i
            className="fas fa-bars text-3xl m-0 text-gray-100"
            onClick={displayMenuOne}
          ></i>
        </span>
        <span className="mr-5">
          <span className="w-6 h-6 pl-2 pb-0.5  bg-[#0c0cadec] absolute mt-[-8px] ml-[-4px]  block rounded-full">
            <p className="m-0 text-gray-100 font-semibold">{orderCount}</p>
          </span>
          <i
            className="fas fa-shopping-cart text-3xl text-gray-100"
            onClick={toOrderList}
          ></i>
        </span>
        <span className="mr-4">
          <i className="fas fa-sign-in text-3xl text-gray-100"></i>
        </span>
        <span>
          <i></i>
        </span>
      </div>
      <div className="hidden absolute w-[98%] z-20 " ref={menuDiv}>
        <Menu func={displayMenuOff} />
      </div>
    </div>
  );
}
export default TopHome;
