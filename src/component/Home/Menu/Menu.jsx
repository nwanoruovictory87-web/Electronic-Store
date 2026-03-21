import { useNavigate } from "react-router-dom";
function Menu(props) {
  const urlNavigator = useNavigate();
  function productCategory(type) {
    const url = `/cartegory/${type}`;
    urlNavigator(url, { replace: false });
  }
  function home() {
    const url = "/"; //base
    urlNavigator(url, { replace: true });
  }
  return (
    <div className=" overflow-auto">
      <div className="bg-gray-700 w-[70%] h-screen fixed">
        <span className="flex justify-end pr-4 pt-4">
          <i
            className="fa fa-xmark text-2xl text-gray-100"
            onClick={props.func}
          ></i>
        </span>
        <div className="flex flex-col mt-7 pl-6 gap-5 pr-6">
          <span className="flex border-b-2 pb-1.5">
            <i className="fas fa-map-marker text-2xl text-gray-100 mr-2"></i>
            <h5 className="text-xl text-gray-100 pt-0.5 mr-auto">
              LOCATE STORE
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span className="flex border-b-2 pb-1.5">
            <i className="fas fa-user text-2xl text-gray-100 mr-2"></i>
            <h5 className="text-xl text-gray-100 pt-0.5 mr-auto">
              LOGIN/SIGNUP
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span className="flex border-b-2 pb-1.5" onClick={() => home()}>
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">
              ALL PRODUCTS
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("GENERATORS")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">
              GENERATORES
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("TELEVISIONS")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">
              TELEVISIONS
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("SOLAR")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">SOLAR</h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("WIRES")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">WIRES</h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("BATTERY")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">
              BATTERY
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("PRESSING-IRON")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">
              PRESSING IRON
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("FAN")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">FAN</h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("COOKER")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">
              COOKER
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("REFRIGERATOR")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">
              RAFRIGERATOR
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("DVD")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">DVD</h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
          <span
            className="flex border-b-2 pb-1.5"
            onClick={() => productCategory("HOMETEATER")}
          >
            <h5 className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto">
              HOMETEATER
            </h5>
            <i className="fas fa-angle-right text-xl text-gray-100"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Menu;
