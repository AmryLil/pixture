"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthLayout from "../../components/Auth";
import Form from "../../components/Auth/Form";
import Input from "../../components/Auth/input";
import Navbar from "../../components/Navbar/navbar";

const page = () => {
  const [newUser, setNewUser] = useState({
    fullname: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/register",
        newUser
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response.data);
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar invisible={"invisible"} />
      <AuthLayout ClassName={"md:top-80 md:pb-0"}>
        <Form
          title={"Register"}
          subtitle={"Create your Account"}
          checked={showPassword}
          onChangeCheckbox={handleShowPassword}
          errorMessage={errorMessage}
          onSubmit={handleSubmit}
        >
          <Input
            value={newUser.username}
            onChange={handleChange}
            label={"Username"}
            name={"username"}
            placeholder={"enter your username"}
            ClassName={`py-1${
              errorMessage === "username already exist" &&
              "border border-red-400 "
            }`}
          />
          <Input
            value={newUser.fullname}
            onChange={handleChange}
            label={"Fullname"}
            name={"fullname"}
            placeholder={"enter your fullname"}
            ClassName={"py-1"}
          />
          <div className="flex gap-1 w-full">
            <div className="w-[50%]">
              <Input
                value={newUser.password === "" ? null : newUser.password}
                onChange={handleChange}
                label={"Password"}
                name={"Password"}
                placeholder={"*********"}
                type={showPassword ? "text" : "password"}
                ClassName={`py-1 ${
                  newUser.password.length < 8 && newUser.password.length > 0
                    ? "border border-red-400 text-red-400 focus:border-red-400 focus:outline-none"
                    : ""
                }`}
              />
            </div>
            <div>
              <Input
                value={newUser.confirm_password}
                onChange={handleChange}
                label={"Confirm Password"}
                name={"confirm_password"}
                placeholder={"*********"}
                type={showPassword ? "text" : "password"}
                ClassName={`py-1 ${
                  (newUser.confirm_password.length < 8 &&
                    newUser.confirm_password.length > 0) ||
                  errorMessage === "password not match" ||
                  errorMessage === "password at least 8 character"
                    ? "border border-red-400 text-red-400 focus:border-red-400 focus:outline-none"
                    : ""
                }`}
              />
            </div>
          </div>
        </Form>
      </AuthLayout>
    </>
  );
};

export default page;
