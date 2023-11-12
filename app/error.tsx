"use client";
import React from "react";

interface Props{
    error:Error;
    reset:() => void;
}

const ErrorPage = ({ error, reset }:Props) => {
    console.log('Error', error)
  return (
    <>
      <p className="text-black">An unexpected error has occurred</p>
      <button className="btn" onClick={() => reset()}>Retry</button>
    </>
  );
};

export default ErrorPage;
