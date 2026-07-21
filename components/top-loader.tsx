"use client";
import NextTopLoader from "nextjs-toploader";
import React from "react";

type NextTopLoaderWrapperProps = {
  children: React.ReactNode;
};

const NextTopLoaderWrapper: React.FC<NextTopLoaderWrapperProps> = ({
  children,
}) => {
  return (
    <>
      <NextTopLoader
        color={"#d8d2c3"}
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0"
        zIndex={1600}
        showAtBottom={false}
      />
      {children}
    </>
  );
};

export default NextTopLoaderWrapper;
