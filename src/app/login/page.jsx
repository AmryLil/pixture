"use client";

import Navbar from "@/components/Navbar/navbar";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthLayout from "../../components/Auth";
import Form from "../../components/Auth/Form";
import Input from "../../components/Auth/input";

const page = () => {
  const router = useRouter();
  const [User, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        User
      );
      const token = response.data.Data.token;
      Cookies.set("jwtToken", token, { expires: 1 });
      router.push("/");
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <>
      <Navbar invisible={"invisible"} />
      <AuthLayout ClassName={"pb-[60px] md:pb-0 py-3 md:py-0"}>
        <Form
          title={"Login"}
          subtitle={"Enter Your Account!!"}
          type={"login"}
          onSubmit={handleSubmit}
        >
          <Input
            label={"Username or Email"}
            name={"username"}
            placeholder={"enter your username"}
            onChange={handleChange}
          />
          <Input
            label={"Password"}
            name={"Password"}
            placeholder={"*********"}
            onChange={handleChange}
          />
        </Form>
      </AuthLayout>
    </>
  );
};

export default page;
