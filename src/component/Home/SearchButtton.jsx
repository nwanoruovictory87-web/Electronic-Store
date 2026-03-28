import { useRef, useState } from "react";
import productsList from "../../../public/json/products";
import { useNavigate } from "react-router-dom";

function SeachButton() {
  const product = productsList();
  const inputRef = useRef(null);
  const urlNavigator = useNavigate();
  const [searchPass, setSearchPass] = useState(false);
  const [productFound, setProductFound] = useState(true);
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
        inputRef.current.value = "";
        return;
      } else if (data.includes(inputData)) {
        const url = `/cartegory/${data.toLocaleUpperCase()}`;
        urlNavigator(url, { replace: false });
        inputRef.current.value = "";
        return;
      }
    }
    setProductFound(false);
  }
  function didUserType(e) {
    if (e.target.value.trim("") !== "") return setSearchPass(true);
    return setSearchPass(false);
  }
  function removeProductNotices() {
    setProductFound(true);
  }
  return (
    <div className="mt-2 sticky top-0 z-10 search-button  transition-all duration-300 ease-in-out  shadow-sm hover:shadow-md">
      <span className="flex p-2 bg-gray-100 pl-4 pr-4 gap-2 ">
        <i className="fa fa-search text-2xl text-[#0000ff54]"></i>
        <span className="w-screen flex ">
          <input
            className="p-1 border-2 border-[#0000ff54] w-full rounded-r-full"
            placeholder="search products and more"
            list="list"
            ref={inputRef}
            onChange={didUserType}
          ></input>
          {searchPass && (
            <span className="absolute search-go right-8 pr-2.5 pt-1">
              <i
                className="fa fa-arrow-right text-xl text-[#08af08a6]"
                onClick={findData}
              ></i>
            </span>
          )}
        </span>
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
      {!productFound && (
        <span className="flex justify-center w-full absolute h-screen">
          <span className="block w-[50%] max-w-[300px] h-10 ">
            <span className=" w-full h-10 flex justify-center items-center bg-[#585656ef] rounded-2xl  overflow-hidden text-center pl-2 pr-2 gap-1.5">
              <h5 className="text-white text-lg ">no products found!</h5>
              <i
                className="fa fa-xmark text-white "
                onClick={removeProductNotices}
              ></i>
            </span>
          </span>
        </span>
      )}
    </div>
  );
}
export default SeachButton;
