"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { close, logo, menu } from "@Images/index";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";
interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [toggle, setToggle] = useState(false);
  const list = [
    { text: "Pricing" },
    { text: "Product" },
    { text: "About Us" },
    { text: "Careers" },
    { text: "Community" },
  ];
  return (
    <>
      <div className="relative flex items-center justify-between py-12 mx-4  lg:mx-12 lg:py-4">
        <Image src={logo} alt="logo" />
        <div className="hidden lg:flex">
          {list.map((i) => (
            <nav
              key={i.text}
              className="px-6 hover:opacity-80 hover:text-[#f44336] transition-all duration-200 font-medium ">
              <Link href="">{i.text}</Link>
            </nav>
          ))}
        </div>
        <button className="py-3 lg:block hidden px-8 my-6 font-medium text-white transition-all duration-100 ease-linear delay-100 rounded-full shadow-xl bg-[#f44336] hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
          Get Started
        </button>
        <div className="lg:hidden">
          {!toggle ? (
            <Image
              onClick={() => setToggle((prev) => !prev)}
              src={menu}
              alt="menu"
            />
          ) : (
            <Image
              onClick={() => setToggle((prev) => !prev)}
              src={close}
              alt="menu"
            />
          )}
        </div>
        <AnimatePresence>
          {toggle && (
            <m.div
              initial={{ opacity: 0, translateY: -200 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ height: 0, translateY: -500 }}
              transition={{ duration: 0.25 }}
              className="absolute right-0 z-40 w-full py-4 font-medium rounded-md md:right-14 top-24 bg-neutral-50">
              {list.map((i) => (
                <ul key={i.text} className="py-4 text-center ">
                  <Link href="">{i.text}</Link>
                </ul>
              ))}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavBar;
