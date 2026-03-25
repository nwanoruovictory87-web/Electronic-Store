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
        secondedBannnar.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
        setSwicth(!swicth);
      } else {
        firstBannar.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
      setSwicth(!swicth);
    }, 7000);
    return () => clearInterval(timout);
  });
  return (
    <>
      <div className="flex overflow-x-auto  w-full flex-grow flex-shrink-0 flex-nowrap ">
        <span
          className=" min-w-full sm:min-[1000px]:h-32 h-20 mt-2 "
          ref={firstBannar}
        >
          <img className="w-full h-full" src={discount30}></img>
        </span>
        <span
          className=" min-w-full sm:min-[1000px]:h-32 h-20 mt-2 o"
          ref={secondedBannnar}
        >
          <img className="w-full h-full" src={discount10}></img>
        </span>
      </div>
    </>
  );
}
export default DiscountBanner;
