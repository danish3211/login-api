"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleemail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlepassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios
        .post("http://172.200.99.112:3011/api/auth/login", { //replacee it with your api
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status == 200 || res.status == 201) {
            toast.success(res.data.message);
          }
        });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="h-screen w-full flex justify-center items-center">
        <div className="shadow-lg p-5 rounded-md w-full lg:w-[400px]">
          <div className="flex flex-col justify-center items-center">
            <img src="/logo.png" alt="img" />
            <p className="mt-4 font-medium text-xl">Sign in your account</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-4 my-5"
          >
            <Input type="email" label="Email" onChange={handleemail} />
            <Input
              onChange={handlepassword}
              label="Password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
            <Checkbox>Remember my preferance</Checkbox>
            <Link href={""}>Forgot Password ?</Link>

            <Button color="primary" variant="flat" fullWidth type="submit">
              Submit
            </Button>
            <Link href={""}>Don't have account? signup</Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;