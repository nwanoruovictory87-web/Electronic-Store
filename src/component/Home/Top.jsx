import Menu from "./Menu/Menu";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UseOrderContext } from "../ContextApi/AppContextApi";
import CheckOutIcon from "../OfViewIcons/CheckoutIcon";
import PcMenu from "../OfViewIcons/PcMenu";
import { useInView } from "react-intersection-observer";
//
function TopHome() {
  const urlNavigator = useNavigate();
  const productContext = UseOrderContext();
  const { orderCount } = productContext;
  const menuDiv = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
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
    <>
      <div className="ml-2 mr-2" ref={ref}>
        {/*store name*/}
        <span className="flex p-2 border-b-2">
          <h2 className="text-lg text-[#0000ff77] ">
            Welcome to AbiyeElectronics.Store
          </h2>
        </span>
        {/*menu bar*/}
        <div className="flex mt-2 bg-[#1a1919c7] h-12 p-1.5">
          <span className="mr-auto pl-1 flex flex-col">
            <i
              className="fas fa-bars text-3xl m-0 text-gray-100"
              onClick={displayMenuOne}
            ></i>
          </span>
          <PcMenu />
          <span className="mr-5">
            <span
              className="w-8 h-8   bg-[#0c0cadec] absolute mt-[-17px] ml-[-10px] pl-2.5   block rounded-full"
              onClick={toOrderList}
            >
              <h5 className="m-0 text-gray-100 font-semibold text-lg">
                {orderCount}
              </h5>
            </span>
            <i
              className="fas fa-shopping-cart text-3xl text-gray-100"
              onClick={toOrderList}
            ></i>
          </span>
          <span className="mr-4">
            <i className="fa-solid fa-user-plus text-3xl text-gray-100"></i>
          </span>
          <span>
            <i></i>
          </span>
        </div>
        <div className="hidden absolute w-[98%] z-20 " ref={menuDiv}>
          <Menu func={displayMenuOff} />
        </div>
      </div>

      {!inView && <CheckOutIcon func={toOrderList} count={orderCount} />}
    </>
  );
}
export default TopHome;
