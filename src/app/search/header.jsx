"use client";

import Menu from "@/components/HeaderHome/menu";
import { FaSearch } from "react-icons/fa";

const HeaderSearch = ({ onSubmit, onChange, value }) => {
  const image = {
    backgroundImage: 'url("/images/header.jpg")',
    backgroundSize: "cover", // Menyesuaikan gambar untuk mengisi ruang latar belakang
    backgroundPosition: "bottom", // Menengahkan gambar di latar belakang
    // Menggunakan tinggi layar penuh
  };

  return (
    <div className="relative ">
      <div
        style={image}
        className="md:flex hidden flex-col justify-center items-center gap-5 h-[350px] md:h-[500px]"
      >
        <div className="text-primary md:text-dark px-4 md:px-0">
          <h1 className="font-bold md:text-5xl text-xl mb-3 text-center ">
            Free Images for download & inspiration
          </h1>
          <h6 className="font-light md:text-sm text-xs text-center">
            Over 680,000+ beautiful free illustrations shared by our talented
            community.
          </h6>
        </div>
        <form onSubmit={onSubmit} className="flex relative w-[70%] h-9 group">
          <button
            className={`absolute start-3 md:start-4 md:top-4 top-2.5 transition-all group-hover:text-accent `}
          >
            <FaSearch className="text-lg md:text-2xl" />
          </button>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Search...."
            className="md:pl-14 pl-9 w-full shadow-gray-300 rounded-full shadow-sm hover:shadow-accent transition-all active:shadow-accent outline-none md:py-7 py-4"
          />
        </form>
      </div>
      <Menu />
    </div>
  );
};

export default HeaderSearch;
