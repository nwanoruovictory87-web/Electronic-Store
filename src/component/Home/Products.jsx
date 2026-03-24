import ProductCatigory from "./ProductsCatigory";
import ProductItems from "./ProductItems";
import ProductLoading from "../LazyLoadingUi/ProductLoading";
import productsList from "../../../public/json/products";

function Products() {
  const products = productsList();
  console.log(products);
  //* random products display
  function getRandomProdust() {
    try {
      let data = products;
      const dataListLength = 13;
      const productDisplayList = [];

      for (let i = 0; i < dataListLength; i++) {
        switch (i) {
          case 0:
            data.battery.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 1:
            data.cooker.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 2:
            data.dvd.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 3:
            data.fan.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 4:
            data.generator.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 5:
            data.hometeater.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 6:
            data.pressingIron.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 7:
            data.refrigerator.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 8:
            data.solar.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 9:
            data.television.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 10:
            data.wire.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 11:
            data.armorCable.map((e) => {
              productDisplayList.push(e);
            });
            break;
          case 12:
            data.drone.map((e) => {
              productDisplayList.push(e);
            });
            break;
        }
      }

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
      const shuffled = shuffleArray(productDisplayList);
      return shuffled;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ProductItems list={getRandomProdust()} />
    </>
  );
}
export default Products;
