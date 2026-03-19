import TopHome from "../Home/Top";
import Catigoreview from "../Home/Catigoreview";
import SeachButton from "../Home/SearchButtton";
import ProductCatigory from "../Home/ProductsCatigory";
import ItemDetails from "./ItemDetails";
import ItemsNameAndPrice from "./ItemesNameAndPrice";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./../../../public/style/ProductDetails.css";
import { useState, useEffect } from "react";
import products from "../../../public/json/products";

function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const data = products();
  const [productsList, setProductsList] = useState([]);
  const id = [
    window.location.pathname.split("/")[3],
    window.location.pathname.split("/")[4],
  ];
  function getProductCartegory(id, inside) {
    if (id) {
      switch (id[0]) {
        case "FAN":
          data.fan.map((e, i) => {
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
          data.generator.map((e, i) => {
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
          data.pressingIron.map((e, i) => {
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
            if (e.index === Number(id[1])) {
              setProductData((prevData) => (prevData = e));
            } else {
              setProductsList((prevList) => {
                if (!inside) {
                  if (prevList.length !== 0) return [...prevList, e];
                  return [e];
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
  }
  useEffect(() => {
    getProductCartegory(id, false);
  }, []);
  return (
    <>
      <TopHome />
      <Catigoreview />
      <SeachButton />
      <ProductCatigory category={"DETAILS"} />
      {productData && <ItemDetails data={productData} />}
      {productData && <ItemsNameAndPrice data={productData} />}
      {productsList && (
        <RelatedProducts
          list={productsList}
          rerenderFunc={getProductCartegory}
        />
      )}
    </>
  );
}
export default ProductDetails;
