"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Input from "./inputprofile";

const Profile = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const BGColor = scrollPosition > 100 ? "bg-white text-dark " : "text-primary";

  // fetchDatauser
  const [userData, setUserData] = useState([]);
  const token = Cookies.get("jwtToken");
  const fetchDataUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const ID = String(userData.id);

  const [addUserDetails, setAddUserDetails] = useState({
    id: "",
    telp: "",
    gender: "",
    location: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setAddUserDetails({ ...addUserDetails, [e.target.name]: e.target.value });
  };

  const handleSubmitUserDetails = async (e) => {
    e.preventDefault();
    setAddUserDetails((prevState) => ({
      ...prevState,
      id: String(userData.id),
    }));

    try {
      console.log("id : ", ID);
      console.log({ addUserDetails });
      const response = await axios.post(
        "http://localhost:8080/api/user/adduserdetail",
        addUserDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("data dibawah ini");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const userCreatedAt = userData.create_at;

  const [dataUserDetails, setDataUserDetails] = useState([]);
  const fetchDataUserDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/user/userdetails",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      setDataUserDetails(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [BtnSubmit, setBtnSubmit] = useState(false);
  const [disable, setDisable] = useState(true);

  const handleBtnSubmit = () => {
    setBtnSubmit(!BtnSubmit);
    setDisable(false);
  };

  useEffect(() => {
    fetchDataUser();
    fetchDataUserDetails();
  }, []);

  return (
    <>
      <Navbar bgcolor={BGColor} />
      <div className="mb-96">
        <div className="h-40 sm:h-64 w-full bg-blue-500">
          <img src="" alt="" />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-20 sm:top-44 sm:left-44 w-80 flex justify-center flex-col items-center gap-2">
          <div className="rounded-full overflow-hidden bg-slate-600 w-32 h-32 sm:h-48 sm:w-48  border-4 sm:-translate-x-10">
            <img src="" alt="" />
          </div>
          <div className="w-full font-salsa sm:text-3xl font-bold pl-10">
            {userData.fullname && userData.fullname}
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full pl-24 text-sm sm:-translate-x-20">
              {userData.username && userData.username}
            </div>
            <div className="text-sm w-60 hidden sm:block">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, omnis.
            </div>
            <div className="text-sm w-60 hidden sm:block">
              Joined at {userCreatedAt && userCreatedAt.slice(0, 10)}
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmitUserDetails}
          className="sm:mt-20 mt-24 px-4 sm:flex sm:flex-col sm:justify-center items-center gap-5"
        >
          <Input
            value={dataUserDetails.email && dataUserDetails.email}
            disable={disable}
            name="email"
            onChange={handleChange}
            type="email"
            title="Email"
          />
          <Input
            value={dataUserDetails.telp && dataUserDetails.telp}
            disable={disable}
            name="telp"
            onChange={handleChange}
            type="text"
            title="Phone Number"
          />
          <Input
            value={dataUserDetails.gender && dataUserDetails.gender}
            disable={disable}
            name="gender"
            onChange={handleChange}
            type="text"
            title="Gender"
          />
          <Input
            value={dataUserDetails.location && dataUserDetails.location}
            disable={disable}
            name="location"
            onChange={handleChange}
            type="text"
            title="Location"
          />
          <button
            onClick={handleBtnSubmit}
            type={`${BtnSubmit ? "submit" : "text"}`}
            className="sm:translate-x-[530px] text-sm sm:text-base bg-blue-600 text-white font-bold py-1 px-6 rounded-sm mt-3 sm:mt-0"
          >
            {BtnSubmit ? "Submit" : "Update"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
