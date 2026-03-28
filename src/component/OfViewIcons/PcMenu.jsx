function PcMenu() {
  return (
    <div className="flex">
      <span className="flex mr-4">
        <i className="fas fa-map-marker text-3xl m-0 text-gray-100"></i>
        <h5>Store</h5>
      </span>
      <span className="flex mr-7">
        <i className="fas fa-shopping-basket text-3xl m-0 text-gray-100"></i>
        <h5 className="text-xl text-gray-100 mt-1 ml-0.5">Category</h5>
      </span>
    </div>
  );
}
export default PcMenu;
