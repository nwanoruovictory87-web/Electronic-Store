import { useNavigate, useParams } from "react-router-dom";

function PcMenu() {
  const urlNavigator = useNavigate();
  const { id } = useParams();
  function home() {
    const url = "/"; //base
    if (!id) return;
    urlNavigator(url, { replace: true });
    // or 'visible' or 'auto'
  }
  return (
    <div className="hidden lg:flex ml-5 mr-auto">
      <span className=" mr-32  flex">
        <i className="fas fa-map-marker text-3xl m-0 text-gray-100"></i>
        <h5 className="text-xl text-gray-100 mt-1 ml-0.5">Locate Store</h5>
      </span>
      <span className="flex ">
        <i className="fas fa-shopping-basket text-3xl m-0 text-gray-100"></i>
        <details>
          <summary className="text-xl text-gray-100 mt-1 ml-0.5">
            Category
          </summary>
          <div className="w-fit p-6 rounded-lg mt-3 h-fit max-h-[300px] overflow-y-auto bg-[#4b4747] absolute z-50">
            <h5 class="text-lg text-gray-100" onClick={home}>
              ALL PRODUCTS
            </h5>
            <h5 class="text-lg text-gray-100">BULB</h5>
            <h5 class="text-lg text-gray-100">FAN</h5>
            <h5 class="text-lg text-gray-100">ARMOR-CABLE</h5>
            <h5 class="text-lg text-gray-100">DRONE</h5>
            <h5 class="text-lg text-gray-100">WIRE</h5>
            <h5 class="text-lg text-gray-100">TELEVISION</h5>
            <h5 class="text-lg text-gray-100">GENERATORS</h5>
            <h5 class="text-lg text-gray-100">SOLAR</h5>
            <h5 class="text-lg text-gray-100">BATTERY</h5>
            <h5 class="text-lg text-gray-100">PRESSING-IRON</h5>
            <h5 class="text-lg text-gray-100">DVD</h5>
            <h5 class="text-lg text-gray-100">HOMETEATER</h5>
            <h5 class="text-lg text-gray-100">COOKER</h5>
            <h5 class="text-lg text-gray-100">SECURITY-CARMERA</h5>
          </div>
        </details>
      </span>
    </div>
  );
}
export default PcMenu;
