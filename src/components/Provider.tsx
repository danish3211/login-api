"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const Provider = ({ children }: any) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Provider;
