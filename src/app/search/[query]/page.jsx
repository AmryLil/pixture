"use client";

import Navbar from "@/components/Navbar/navbar";
import Card from "@/components/PhotoList/card";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderSearch from "../header";

const Page = ({ params }) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const jumlahKartuPerBaris = 4;

  const loadMorePhotos = (querysearch = query) => {
    setLoading(true);

    const accessKey = "tIeMoCq3YeT4wlxAAUCreWJMrDvKqcRkzBzt1XYfDCU";
    const perPage = 25;
    const apiUrl = `https://api.unsplash.com/search/photos?page=${currentPage}&per_page=${perPage}&query=${querysearch}`;
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      })
      .then((response) => {
        const newPhotos = response.data.results;
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
        setCurrentPage((prevPage) => prevPage + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from Unsplash:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMorePhotos(params.query);
  }, [params.query]);

  const row1 = photos.filter((_, index) => index % jumlahKartuPerBaris === 1);
  const row2 = photos.filter((_, index) => index % jumlahKartuPerBaris === 2);
  const row3 = photos.filter((_, index) => index % jumlahKartuPerBaris === 3);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading
    ) {
      loadMorePhotos(query);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, query]);

  const screenWidth = window.innerWidth;
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    setPhotos([]); // Clear previous search results
    setCurrentPage(1); // Reset page when performing a new search
    loadMorePhotos(query);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScrollPosition = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  const BGColor =
    scrollPosition > 100 ? "md:bg-white  md:text-dark " : "text-primary";
  const setInvisible = scrollPosition > 250 ? "" : " md:invisible";

  return (
    <>
      <Navbar
        bgcolor={`${BGColor}`}
        invisible={setInvisible}
        onSubmit={handleSearch}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <div className="w-full flex flex-col justify-center">
        <HeaderSearch
          bgcolor={"bg-white md:bg-none"}
          onSubmit={handleSearch}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <div className="gap-2 items-center hidden md:flex ">
          <div className="pl-14 font-light text-2xl ">Result</div>
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
    </>
  );
};

export default Page;
