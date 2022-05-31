import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Navbar() {
  const [hidden, setHidden] = React.useState(true);

  const handleNavbar = () => setHidden(!hidden);

  return (
    <nav
      className={`fixed z-50 w-full  px-4 mx-auto max-w-screen-2xl lg:px-24 md:backdrop-blur-md md:bg-transparent ${
        hidden ? "h-16" : null
      } bg-white md:shadow-none shadow-2xl pb-5`}
    >
      <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
        <Link href="/">
          <div className="w-10 h-10 z-19 top-3 absolute cursor-pointer">
            <Image
              objectFit="contain"
              layout="fill"
              src="/images/logo.png"
              alt="logo pedulilansia"
            />
          </div>
        </Link>
        <div className="flex items-center justify-between">
          {/* <!-- LOGO --> */}
          {/* <!-- RESPONSIVE NAVBAR BUTTON TOGGLER --> */}
          <div>
            <button
              className="block p-1 outline-none lg:hidden mobile-menu-button absolute right-8 top-3"
              data-target="#navigation"
              onClick={handleNavbar}
            >
              <MenuOutlined className="text-2xl" />
            </button>
          </div>

          <div
            className={`${
              hidden ? "hidden" : null
            } w-full mobile-menu justify-center lg:block`}
            id="navigation"
          >
            <div className="flex flex-col items-baseline justify-between md:mt-0 mt-10 lg:flex-row lg:items-center">
              <div className="flex flex-col w-full ml-0 font-normal lg:flex-row text-white-1 lg:ml-44 lg:w-max z-10 capitalize">
                <Link href="/#feature">
                  <p className=" text-black py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 md:text-left text-right md:pr-auto pr-3 hover:text-blue-200">
                    Kelebihan
                  </p>
                </Link>
                <Link href="/#about-us">
                  <p className=" text-black py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 md:text-left text-right md:pr-auto pr-3 hover:text-blue-200">
                    Pelayanan Kami
                  </p>
                </Link>
                <Link href="/report">
                  <p className=" text-black py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 md:text-left text-right md:pr-auto pr-3 hover:text-blue-200">
                    Buat Aduan
                  </p>
                </Link>
                <Link href="/information">
                  <p className=" text-black py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 md:text-left text-right md:pr-auto pr-3 hover:text-blue-200">
                    Informasi Umum
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
