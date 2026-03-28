import { useNavigate, useParams } from "react-router-dom";
function Menu(props) {
  const { id } = useParams();
  const urlNavigator = useNavigate();
  function productCategory(type) {
    if (type !== id) {
      document.body.style.overflow = ""; // or 'visible' or 'auto'
    }
    const url = `/cartegory/${type}`;
    urlNavigator(url, { replace: false });
  }
  function home() {
    const url = "/"; //base
    if (!id) return;
    urlNavigator(url, { replace: true });
    document.body.style.overflow = ""; // or 'visible' or 'auto'
  }
  return (
    <div className="fixed inset-0 bg-[#1a1919] w-[70%] h-screen overflow-y-auto pb-16 z-50">
      <span className="flex justify-end pr-4 pt-4">
        <i
          className="fa fa-xmark text-2xl text-gray-100"
          onClick={props.func}
        ></i>
      </span>
      <div className="flex flex-col mt-7 pl-6 gap-5 pr-6">
        <span className="flex border-b-2 pb-1.5">
          <i className="fas fa-map-marker text-2xl text-gray-100 mr-2"></i>
          <h5 className="text-xl text-gray-100 pt-0.5 mr-auto">LOCATE STORE</h5>
          <i className="fas fa-angle-right text-xl text-gray-100"></i>
        </span>
        <span className="flex border-b-2 pb-1.5">
          <i className="fas fa-user text-2xl text-gray-100 mr-2"></i>
          <h5 className="text-xl text-gray-100 pt-0.5 mr-auto">LOGIN/SIGNUP</h5>
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
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("GENERATORS")}
          >
            GENERATORES
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("GENERATORS")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("TELEVISION")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("TELEVISION")}
          >
            TELEVISIONS
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("TELEVISION")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("SOLAR")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("SOLAR")}
          >
            SOLAR
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("SOLAR")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("WIRES")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("WIRES")}
          >
            WIRES
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("WIRES")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("BATTERY")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("BATTERY")}
          >
            BATTERY
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("BATTERY")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("PRESSING-IRON")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("PRESSING-IRON")}
          >
            PRESSING IRON
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("PRESSING-IRON")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("FAN")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("FAN")}
          >
            FAN
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("FAN")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("COOKER")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("COOKER")}
          >
            COOKER
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("COOKER")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("REFRIGERATOR")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("REFRIGERATOR")}
          >
            RAFRIGERATOR
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("REFRIGERATOR")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("DVD")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("DVD")}
          >
            DVD
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("DVD")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("HOMETEATER")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("HOMETEATER")}
          >
            HOMETEATER
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("HOMETEATER")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("ARMOR-CABLE")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("ARMOR-CABLE")}
          >
            ARMOR CABLE
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("ARMOR-CABLE")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("BULB")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("BULB")}
          >
            BULB
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("BULB")}
          ></i>
        </span>
        <span
          className="flex border-b-2 pb-1.5"
          onClick={() => productCategory("DRONE")}
        >
          <h5
            className="text-xl ml-2 text-gray-100 pt-0.5 mr-auto"
            onClick={() => productCategory("DRONE")}
          >
            DRONE
          </h5>
          <i
            className="fas fa-angle-right text-xl text-gray-100"
            onClick={() => productCategory("DRONE")}
          ></i>
        </span>
      </div>
    </div>
  );
}
export default Menu;
