function SeachButton() {
  return (
    <div className="mt-2 sticky top-0 z-10 search-button backdrop-blur-md transition-all duration-300 ease-in-out  shadow-sm hover:shadow-md">
      <span className="flex p-2 bg-gray-100 pl-4 pr-4 gap-2">
        <i className="fa fa-search text-2xl text-[#0000ff54]"></i>
        <input
          className="p-1 border-2 border-[#0000ff54] w-screen rounded-r-full"
          placeholder="search products and more"
        ></input>
      </span>
    </div>
  );
}
export default SeachButton;
