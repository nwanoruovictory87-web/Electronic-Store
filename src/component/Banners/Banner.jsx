import discount30 from "../../../public/image/30.jpg";
import discount10 from "../../../public/image/10.jpg";

function DiscountBanner() {
  return (
    <>
      <div className="flex overflow-x-auto  w-full flex-grow flex-shrink-0 flex-nowrap ">
        <span className=" min-w-full sm:min-[1000px]:h-32 h-20 mt-2 ">
          <img className="w-full h-full" src={discount30}></img>
        </span>
        <span className=" min-w-full sm:min-[1000px]:h-32 h-20 mt-2 o">
          <img className="w-full h-full" src={discount10}></img>
        </span>
      </div>
    </>
  );
}
export default DiscountBanner;
