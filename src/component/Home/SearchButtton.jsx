import { useRef } from "react";
import productsList from "../../../public/json/products";
import { useNavigate } from "react-router-dom";

function SeachButton() {
  const product = productsList();
  const inputRef = useRef(null);
  const urlNavigator = useNavigate();
  function findData() {
    const inputData = inputRef.current.value.toLowerCase();
    for (const data in product) {
      if (
        inputData === "PRESSING-IRON".toLowerCase() ||
        inputData === "SECURITY-CARMERA".toLowerCase() ||
        inputData === "ARMOR-CABLE".toLowerCase()
      ) {
        const newData = inputData.split("-").join("");

        if (data.includes(newData)) {
          const url = `/cartegory/${inputData.toLocaleUpperCase()}`;
          urlNavigator(url, { replace: false });
        }
      }
      if (data.includes(inputData)) {
        const url = `/cartegory/${data.toLocaleUpperCase()}`;
        urlNavigator(url, { replace: false });
      }
    }
  }

  return (
    <div className="mt-2 sticky top-0 z-10 search-button backdrop-blur-md transition-all duration-300 ease-in-out  shadow-sm hover:shadow-md">
      <span className="flex p-2 bg-gray-100 pl-4 pr-4 gap-2">
        <i
          className="fa fa-search text-2xl text-[#0000ff54]"
          onClick={findData}
        ></i>
        <input
          className="p-1 border-2 border-[#0000ff54] w-screen rounded-r-full"
          placeholder="search products and more"
          list="list"
          ref={inputRef}
        ></input>
        <datalist id="list" className="">
          <option value="BULB"></option>
          <option value="FAN"></option>
          <option value="ARMOR-CABLE"></option>
          <option value="DRONE"></option>
          <option value="WIRE"></option>
          <option value="TELEVISION"></option>
          <option value="GENERATORS"></option>
          <option value="SOLAR"></option>
          <option value="BATTERY"></option>
          <option value="PRESSING-IRON"></option>
          <option value="DVD"></option>
          <option value="HOMETEATER"></option>
          <option value="COOKER"></option>
          <option value="SECURITY-CARMERA"></option>
        </datalist>
      </span>
    </div>
  );
}
export default SeachButton;
