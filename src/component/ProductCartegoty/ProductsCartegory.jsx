import Catigoreview from "../Home/Catigoreview";
import SeachButton from "../Home/SearchButtton";
import TopHome from "../Home/Top";
import ProductItems from "../Home/ProductItems";
import ProductCatigory from "../Home/ProductsCatigory";
import End from "../Home/End";
import { useEffect, useState } from "react";
import products from "../../../public/json/products";
import { useParams } from "react-router-dom";

function ProductCategory() {
  const [productsList, setProductsList] = useState([]);
  const [shuffleList, setShuffleList] = useState(null);
  const productsData = products();
  const { id } = useParams();
  const shuffleArray = (array) => {
    const shuffled = [...array];
    let currentIndex = shuffled.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffled[currentIndex], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[currentIndex],
      ];
    }
    return shuffled;
  };
  function getProductCartegory(id) {
    if (id) {
      switch (id) {
        case "FAN":
          productsData.fan.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "DVD":
          productsData.dvd.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "BATTERY":
          productsData.battery.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "COOKER":
          productsData.cooker.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "TELEVISIONS":
          productsData.television.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "SOLAR":
          productsData.solar.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "HOMETEATER":
          productsData.hometeater.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "WIRES":
          productsData.wire.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "GENERATORS":
          productsData.generator.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "PRESSING-IRON":
          productsData.pressingIron.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length != 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        case "REFRIGERATOR":
          productsData.refrigerator.map((e, i) => {
            setProductsList((prevList) => {
              if (i === 0) {
                return [e];
              } else {
                if (prevList.length !== 0) return [...prevList, e];
                return [e];
              }
            });
          });
          break;
        default:
          break;
      }
    }
  }
  useEffect(() => {
    getProductCartegory(id);
    //console.log(id);
  }, [id]);
  useEffect(() => {
    const itemsList = shuffleArray(productsList);
    if (itemsList) {
      setShuffleList((prevList) => (prevList = itemsList));
    }
  }, [productsList]);
  return (
    <>
      <TopHome />
      <Catigoreview />
      <SeachButton />
      <ProductCatigory category={window.location.pathname.split("/")[3]} />
      {shuffleList && <ProductItems list={shuffleList} />}
      <End />
    </>
  );
}
export default ProductCategory;
