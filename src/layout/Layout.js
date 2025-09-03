import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import MobileFooter from "./footer/MobileFooter";
const Layout = () => {
  return (
    <div className="bg-main text-white">
      <Navbar />
      <Outlet/>
      <Footer />
      {/* <MobileFooter /> */}
      <MobileFooter/>
    </div>
  );
};

export default Layout;
