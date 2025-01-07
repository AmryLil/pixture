"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import PhotoDetail from "./photodetail";

const DetailPhoto = ({ params }) => {
  const [urlImage, setUrlImage] = useState([]);
  const accessKey = "tIeMoCq3YeT4wlxAAUCreWJMrDvKqcRkzBzt1XYfDCU";
  const apiURL = `https://api.unsplash.com/photos/${params.detailsphoto}`;
  async function getUrlPhoto() {
    axios
      .get(apiURL, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      })
      .then((response) => {
        console.log("Data dari Unsplash:", response);
        const data = response.data;
        setUrlImage([data]);
      })
      .catch((error) => {
        console.error("Error fetching data from Unsplash:", error);
      });
  }
  useEffect(() => {
    getUrlPhoto();
  }, []);

  return (
    <>
      <PhotoDetail
        urlImage={urlImage.map((urlimg) => {
          return urlimg.urls.regular;
        })}
        username={urlImage.map((user) => {
          return user.user.username;
        })}
        followers={urlImage.map((user) => {
          return user.user.total_likes;
        })}
        likesFoto={urlImage.map((photo) => {
          return photo.likes;
        })}
        createAt={urlImage.map((user) => {
          return user.created_at;
        })}
        biouUer={urlImage.map((user) => {
          return user.user.bio;
        })}
        deks={urlImage.map((photo) => {
          return photo.alt_description;
        })}
      />
    </>
  );
};
export default DetailPhoto;
