import { useNavigate } from "react-router-dom";
import DiscountBanner from "../Banners/Banner";

function Catigoreview() {
  const urlNavigator = useNavigate();
  function productCategory(type) {
    const url = `/cartegory/${type}`;
    urlNavigator(url, { replace: false });
  }
  return (
    <>
      <DiscountBanner />
      <div className=" mt-2 ">
        <div className="flex gap-1 overflow-y-auto bg-gray-50 pt-2 pb-2 pl-1 pr-1">
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("GENERATORS")}
          >
            <h5 className="text-[14px] text-blue-700">GENERATORS</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("TELEVISIONS")}
          >
            <h5 className="text-[14px] text-blue-700">TELEVISIONS</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("SOLAR")}
          >
            <h5 className="text-[14px] text-blue-700">SOLAR</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("WIRES")}
          >
            <h5 className="text-[14px] text-blue-700">WIRES</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("BATTERY")}
          >
            <h5 className="text-[14px] text-blue-700">BATTERY</h5>
          </span>
          <span
            className="block  w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("PRESSING-IRON")}
          >
            <h5 className="text-[14px] text-blue-700">PRESSING.IRON</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("FAN")}
          >
            <h5 className="text-[14px] text-blue-700">FAN</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("COOKER")}
          >
            <h5 className="text-[14px] text-blue-700">COOKER</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("REFRIGERATOR")}
          >
            <h5 className="text-[14px] text-blue-700">REFRIGERATOR</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("DVD")}
          >
            <h5 className="text-[14px] text-blue-700">DVD</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("HOMETEATER")}
          >
            <h5 className="text-[14px] text-blue-700">HOMETEATER</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("ARMOR-CABLE")}
          >
            <h5 className="text-[14px] text-blue-700">ARMOR.CABLE</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("HOMETEATER")}
          >
            <h5 className="text-[14px] text-blue-700">SECURITY.CARMERA</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("HOMETEATER")}
          >
            <h5 className="text-[14px] text-blue-700">BULB</h5>
          </span>
          <span
            className="block w-fit h-8 p-1 pl-2 pr-2 rounded-xl border-2 border-gray-300 "
            onClick={() => productCategory("DRONE")}
          >
            <h5 className="text-[14px] text-blue-700">DRONE</h5>
          </span>
        </div>
      </div>
    </>
  );
}
export default Catigoreview;
