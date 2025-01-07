import { BsPersonFillAdd } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaShareNodes } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import HomePage from "../../components/PhotoList";

const { default: Navbar } = require("../../components/Navbar/navbar");

const PhotoDetail = ({
  urlImage,
  username,
  followers,
  biouUer,
  likesFoto,
  createAt,
  deks,
}) => {
  return (
    <>
      <Navbar bgcolor={"bg-white"} />
      <div className="pt-20 md:h-screen h-full flex flex-col md:flex-row md:px-10 ">
        <div className="md:w-[70%] w-full h-[90%] md:h-full  flex justify-center rounded-xl overflow-hidden p-3">
          <div className="h-full rounded-xl overflow-hidden">
            <img src={urlImage} alt="" className="h-full object-cover" />
          </div>
        </div>
        <div className="md:w-[30%] w-full md:h-full h-[60]  bg-white px-4 py-3">
          <div className="rounded-xl w-full h-full md:shadow-md md:shadow-gray-400 px-4 flex flex-col gap-6">
            <div className="p-1 hidden md:block">
              <h3 className="font-semibold text-xl">Photo Details</h3>
              <h5 className="font-light text-sm">
                Free download for all users pixture
              </h5>
            </div>

            <div className="hidden md:flex flex-col gap-2">
              <div className="h-9 flex  w-full  gap-3 justify-between px-2 items-center ">
                <div className="flex gap-2 items-center justify-center">
                  <CgProfile size={34} />
                  <div className="flex flex-col  justify-start">
                    <h4 className="text-sm font-semibold">{username}</h4>
                    <h5 className="text-xs font-light">
                      {followers} followers
                    </h5>
                  </div>
                </div>
                <div>
                  <BsPersonFillAdd size={23} />
                </div>
              </div>
              <div className="text-xs font-light px-6">
                <p>{biouUer}</p>
              </div>
            </div>

            <div className="flex gap-2 h-9  mt-4 px-3">
              <div className="cursor-pointer hover:border-solid hover:border-dark rounded-lg shadow-md border w-[40%] flex gap-1 items-center justify-center">
                <GrLike size={18} />
                <span className="pt-0.5">Like</span>
              </div>
              <div className="cursor-pointer hover:border-solid hover:border-dark rounded-lg shadow-md border w-[40%] flex gap-1 items-center justify-center">
                <MdOutlineBookmarkAdd size={20} />
                <span>Save</span>
              </div>
              <div className="cursor-pointer hover:border-solid hover:border-dark rounded-lg shadow-md border w-[20%] flex gap-1 items-center justify-center">
                <FaShareNodes size={20} />
              </div>
            </div>

            <div className="flex flex-col px-5 text-sm text-dark font-light ">
              <div className="flex justify-between">
                <div>Total Likes : </div>
                <div>{likesFoto}</div>
              </div>
              <div className="flex justify-between mb-3">
                <div>Created At : </div>
                <div>{createAt}</div>
              </div>
              <div className="text-xs">{deks}</div>
            </div>

            <div className="px-4 w-full">
              <button className="bg-blue-600 w-full  text-primary px-4 py-1 font-bold rounded-lg shadow-md">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <HomePage title={"More Like This"} />
    </>
  );
};
export default PhotoDetail;
