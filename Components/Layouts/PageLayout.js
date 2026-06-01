"use client";
import { useContext, useEffect, useState } from "react";
import NavigationBar from "../Headers/NavigationBar";
import Drawer from "../Mobile/Drawer";
import { MenuContext } from "../Context/MenuContext";
import Footer from "../Footer/Footer";
import LeftSocial from "../Home/Hero/LeftSocial";
import { IoIosArrowUp } from "react-icons/io";

const PageLayout = ({ children }) => {
  const { isMenu } = useContext(MenuContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden relative w-full bg-darker">
      <LeftSocial />

      {/* Scroll to top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="bg-primary text-white text-xl cursor-pointer p-2 sm:p-3 fixed z-[999] right-6 bottom-6 hover:bg-opacity-80 transition-all duration-200"
        >
          <IoIosArrowUp />
        </button>
      )}

      {isMenu && <Drawer />}

      <div className="w-full fixed top-0 left-0 z-[999]">
        <NavigationBar />
      </div>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default PageLayout;
