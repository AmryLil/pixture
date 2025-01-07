const Card = (props) => {
  const { imgsrc, title, onClick } = props;

  return (
    // <div
    //   style={image}
    //   onClick={onClick}
    //   className="p-1 sm:p-0  w-full h-full shadow-lg relative group sm:hover:bg-black rounded-xl transition-all duration-300 cursor-pointer"
    // ></div>
    <div onClick={onClick} className="relative group cursor-pointer">
      <img
        src={imgsrc}
        alt=""
        className="rounded-lg shadow-md filter group-hover:brightness-75 transition-all"
      />
      <div className="flex sm:w-full justify-between items-start px-2 sm:absolute top-3  sm:font-bold sm:hidden sm:group-hover:flex transition-all duration-300 text-dark md:text-white mt-1">
        <div className="px-2 text-sm">{title}</div>
        <div className="font-bold px-2 sm:hidden -translate-y-1 text-dark md:text-white">
          ...
        </div>
        <button className="bg-white hidden md:block text-black  text-sm py-1 px-4 rounded-2xl">
          Save
        </button>
      </div>
      <button className="w-8 h-8 rounded-full bg-white p-2 sm:absolute bottom-3 right-2 sm:text-white font-bold hidden sm:hidden sm:group-hover:flex transition-all duration-300">
        <a>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/material-rounded/48/download--v1.png"
            alt="download--v1"
          />
        </a>
      </button>
    </div>
  );
};
export default Card;
