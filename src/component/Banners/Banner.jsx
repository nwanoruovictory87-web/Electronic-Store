import discount30 from "../../../public/image/30.jpg";
import discount10 from "../../../public/image/10.jpg";
import { useRef, useState, useEffect } from "react";

function DiscountBanner() {
  const firstBannar = useRef(null);
  const secondedBannnar = useRef(null);
  const [swicth, setSwicth] = useState(false);
  useEffect(() => {
    const timout = setInterval(() => {
      if (!swicth) {
        firstBannar.current.style.display = "none";
        secondedBannnar.current.style.display = "block";
        setSwicth(!swicth);
      } else {
        secondedBannnar.current.style.display = "none";
        firstBannar.current.style.display = "block";
      }
      setSwicth(!swicth);
    }, 7000);
    return () => clearInterval(timout);
  });
  return (
    <>
      <div className="flex overflow-hidden  w-full flex-grow flex-shrink-0 flex-nowrap ">
        <span
          className=" min-w-full sm:min-[1000px]:h-28 h-20 mt-2 banner-image"
          ref={firstBannar}
        >
          <img className="w-full h-full" src={discount30}></img>
        </span>
        <span
          className=" min-w-full sm:min-[1000px]:h-28 h-20 mt-2 banner-image"
          ref={secondedBannnar}
        >
          <img className="w-full h-full" src={discount10}></img>
        </span>
      </div>
    </>
  );
}
export default DiscountBanner;
