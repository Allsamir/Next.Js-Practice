"use client";
import { usePathname } from "next/navigation";
import React from "react";
const Footer = () => {
  const pathName = usePathname();
  if (pathName.includes("/dashboard")) {
    return (
      <div className="text-center bg-black text-white py-4">
        Dashboard Footer
      </div>
    );
  }
  return (
    <div className="text-center bg-black text-white py-4">This is Footer</div>
  );
};

export default Footer;
