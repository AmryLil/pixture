"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import Card from "./card";

const HomePage = ({ title }) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const jumlahKartuPerBaris = 4;

  const loadMorePhotos = () => {
    setLoading(true);

    const accessKey = "tIeMoCq3YeT4wlxAAUCreWJMrDvKqcRkzBzt1XYfDCU";
    const perPage = 25;
    const apiUrl = `https://api.unsplash.com/photos?page=${currentPage}&per_page=${perPage}`;
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      })
      .then((response) => {
        console.log("Data dari Unsplash:", response.data);
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
        setCurrentPage((prevPage) => prevPage + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from Unsplash:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMorePhotos();
  }, []);

  const row1 = photos.filter((_, index) => index % jumlahKartuPerBaris === 1);
  const row2 = photos.filter((_, index) => index % jumlahKartuPerBaris === 2);
  const row3 = photos.filter((_, index) => index % jumlahKartuPerBaris === 3);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading
    ) {
      loadMorePhotos();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  const screenWidth = window.innerWidth;

  // const [query, setQuery] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setPhotos([]); // Membersihkan hasil pencarian sebelumnya
  //   setCurrentPage(1); // Reset halaman saat melakukan pencarian baru
  //   searchImages();
  // };

  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center">
      <Navbar bgcolor={"bg-white md:bg-none"} />
      <div className="gap-2 items-center hidden md:flex ">
        <div className="pl-14 font-light text-2xl ">{title}</div>
        <div className="h-0.5 bg-dark w-[40%]"></div>
      </div>
      <div className="relative flex flex-wrap pt-5 w-full sm:px-14 px-2 justify-center">
        <div className="flex gap-2 md:gap-x-7  w-full">
          {(screenWidth <= 500 ? [row1, row2] : [row1, row2, row3]).map(
            (photos, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className={` w-[50%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[47%] flex flex-col gap-y-1 dark:text-white md:gap-y-6  animate__animated animate__slideInUp `}
              >
                {photos.map((photo, photoIndex) => (
                  <Card
                    imgsrc={photo.urls.small}
                    title={photo.user.first_name}
                    key={`card-${photo.id}-${photoIndex}`}
                    onClick={() => {
                      router.push(`/${photo.id}`);
                    }}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
