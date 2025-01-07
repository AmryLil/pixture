const Menu = () => {
  return (
    <div className=" md:gap-7 gap-2 font-bold  text-dark p-2 justify-center items-center h-24 text-base md:text-xl pt-[80px] md:pt-0 hidden md:flex">
      <div className="hover:bg-amber-300 cursor-pointer py-1 md:px-5 px-3 rounded-full">
        Home
      </div>
      <div className="hover:bg-amber-300 cursor-pointer py-1 md:px-5 px-3 rounded-full">
        Videos
      </div>
      <div className="hover:bg-amber-300 cursor-pointer py-1 md:px-5 px-3 rounded-full">
        Rating
      </div>
      <div className="hover:bg-amber-300 cursor-pointer py-1 md:px-5 px-3 rounded-full">
        Leaderboard
      </div>
    </div>
  );
};
export default Menu;
