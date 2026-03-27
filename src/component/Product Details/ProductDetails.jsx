import TopHome from "../Home/Top";
import Catigoreview from "../Home/Catigoreview";
import SeachButton from "../Home/SearchButtton";
import ProductCatigory from "../Home/ProductsCatigory";
import ItemDetails from "./ItemDetails";
import ItemsNameAndPrice from "./ItemesNameAndPrice";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./../../../public/style/ProductDetails.css";
import { useState, useEffect, useRef } from "react";
import products from "../../../public/json/products";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const data = products();
  const [productsList, setProductsList] = useState([]);
  const parth = window.location.pathname.split("/")[3];
  const { id } = useParams();
  const topDiv = useRef(null);
  function getProductCartegory(index, inside, parth) {
    const id = index;
    if (id) {
      switch (parth) {
        case "FAN":
          data.fan.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "DVD":
          data.dvd.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "BATTERY":
          data.battery.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "COOKER":
          data.cooker.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "TELEVISION":
          data.television.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "SOLAR":
          data.solar.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "HOMETEATER":
          data.hometeater.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "WIRE":
          data.wire.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "GENERATOR":
          data.generators.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "PRESSING-IRON":
          data.pressingiron.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "REFRIGERATOR":
          data.refrigerator.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "ARMOR-CABLE":
          data.armorcable.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "DRONE":
          data.drone.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "SECURITY-CARMERA":
          data.securtycarmera.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        case "BULB":
          data.bulb.map((e, i) => {
            if (e.index === Number(id)) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (i === 0) {
                    return [e];
                  } else {
                    if (prevList.length !== 0) return [...prevList, e];
                    return [e];
                  }
                } else {
                  if (i === 0) {
                    return [e];
                  } else {
                    return [...prevList, e];
                  }
                }
              });
            }
          });
          break;
        default:
          break;
      }
    }
    topDiv.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  useEffect(() => {
    getProductCartegory(id, false, parth);
  }, [id]);
  return (
    <>
      <TopHome />
      <Catigoreview />
      <SeachButton />
      <ProductCatigory category={"DETAILS"} />

      {productData && <ItemDetails data={productData} />}
      {productData && <ItemsNameAndPrice data={productData} />}
      <div className="" ref={topDiv}></div>
      <RelatedProducts list={productsList} rerenderFunc={getProductCartegory} />
    </>
  );
}
export default ProductDetails;
