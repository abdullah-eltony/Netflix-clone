import React, { useRef } from "react";
import { BsCollectionPlay } from "react-icons/bs";
import { CgMenuBoxed } from "react-icons/cg";
import { FiHeart, FiUserCheck } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { MdGroups, MdPhoneInTalk } from "react-icons/md";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const MobileFooter = () => {
  const maskRef = useRef();
  const drawerRef = useRef();
  const active = "bg-white text-main";
  const inActive =
    "transitions text-2xl flex-cols hover:bg-white hover:text-main text-white rounded-md px-4 py-3";
  const Hover = ({ isActive }) =>
    isActive ? `${inActive} ${active}` : inActive;

  const handleCloseDrawer = () => {
    maskRef.current.classList.add("hidden");
    drawerRef.current.classList.add("hidden");
  };

  const handleOpenDrawer = () => {
    maskRef.current.classList.remove("hidden");
    drawerRef.current.classList.remove("hidden");
  }
 
  return (
    <>
      <div className="drawer-mask hidden" ref={maskRef}></div>
      <div className="drawer hidden" ref={drawerRef}>

        {/*Drawer Header*/}
        <div className="w-full flex-btn h-16 px-6 py-4 bg-dry">
          <Link to={"/"}>
            <img
              src="images/logo.png"
              alt="logo"
              className="w-28 h-28 object-contain"
            />
          </Link>
          <button className="w-10 h-10 rounded-full text-subMain bg-white transitions text-2xl flex-cols hover:bg-subMain hover:text-white" onClick={handleCloseDrawer}>
            <IoIosClose />
          </button>
        </div>

        {/*Drawer Body*/}
        <div className="w-full overflow-y-scroll flex-grow max-h-full">
          <div className="pb-12 pt-4">
            <NavLink
              to="/movies"
              className="rounded hover:bg-dry text-white sm:gap-10 font-medium text-sm transitions flex gap-6 items-center sm:px-8 px-4 py-4 hover:text-subMain transitions"
            >
              <BsCollectionPlay size={18} /> Movies
            </NavLink>
            <NavLink
              to="/about"
              className="rounded hover:bg-dry text-white sm:gap-10 font-medium text-sm transitions flex gap-6 items-center sm:px-8 px-4 py-4 hover:text-subMain transitions"
            >
              <MdGroups size={18} /> About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="rounded hover:bg-dry text-white sm:gap-10 font-medium text-sm transitions flex gap-6 items-center sm:px-8 px-4 py-4 hover:text-subMain transitions"
            >
              <MdPhoneInTalk size={18} /> Contact Us
            </NavLink>
          </div>
          <div className="flex-rows gap-6 w-full">
            <Link
              to="https://youtube.com"
              className="flex-cols w-12 h-12 transitions hover:bg-subMain text-lg bg-white rounded bg-opacity-30"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://youtube.com"
              className="flex-cols w-12 h-12 transitions hover:bg-subMain text-lg bg-white rounded bg-opacity-30"
            >
              <FaTelegram />
            </Link>
            <Link
              to="https://youtube.com"
              className="flex-cols w-12 h-12 transitions hover:bg-subMain text-lg bg-white rounded bg-opacity-30"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <footer className="lg:hidden fixed z-40 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn w-full p-1">
          <NavLink to={"/movies"} className={Hover}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to="/favorites" className={Hover}>
            <div className="relative">
              <FiHeart className="w-6 h-6" />
              <span className="absolute -top-5 -right-2 text-white bg-subMain rounded-full text-xs w-5 h-5 flex-cols">
                2
              </span>
            </div>
          </NavLink>
          <NavLink to={"/login"} className={Hover}>
            <FiUserCheck />
          </NavLink>
          <button className={inActive} onClick={handleOpenDrawer}>
            <CgMenuBoxed />
          </button>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
