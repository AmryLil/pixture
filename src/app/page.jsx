import Header from "../components/HeaderHome";
import HomePage from "../components/PhotoList";

export default function Home() {
  return (
    <div className="">
      <Header bgcolor={"bg-white md:bg-none"} />
      <div className="w-full py-12 md:py-0 px-3 md:px-0">
        <HomePage title={"All Photos"} />
      </div>
    </div>
  );
}
