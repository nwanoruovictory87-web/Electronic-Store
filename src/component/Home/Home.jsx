import TopHome from "./Top";
import Catigoreview from "./Catigoreview";
import SeachButton from "./SearchButtton";
import Products from "./Products";
import End from "./End";
import "../../../public/style/Home.css";

function Home() {
  return (
    <>
      <TopHome />
      <Catigoreview />
      <SeachButton />
      <Products />
      <End />
    </>
  );
}
export default Home;
