import {
  InstagramFilled,
  MailFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="footer font-display bg-dark-6">
      <footer className="bg-dark-6">
        <div className="max-w-screen-2xl px-4 mx-auto py-14 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-4 md:text-left text-center">
            <div className="md:col-span-12 lg:col-span-6">
              <Link href="/">
                <div className=" cursor-pointer flex items-center md:justify-start justify-center gap-3">
                  <div className="relative w-20 h-20">
                    <Image
                      objectFit="contain"
                      layout="fill"
                      src="/images/logo.png"
                      alt="logo pedulilansia"
                    />
                  </div>
                  <h3 className="text-white text-2xl cursor-pointer ">
                    pedulilansia.online
                  </h3>
                </div>
              </Link>

              {/* <!-- social media icons --> */}
              <h3 className="text-2xl text-white mt-14 mb-3 font-bold">
                Kontak kami
              </h3>
              <div className="flex md:flex-row flex-col gap-3 md:items-center ">
                <a
                  href="https://www.instagram.com/pedulilansia_2f"
                  className="flex gap-3 items-center md:h-10 md:w-10 md:hover:w-auto duration-500 transition-all text-white hover:text-blue-500 md:justify-start justify-center"
                >
                  <InstagramFilled className=" text-3xl peer" />
                  <p className=" md:hidden md:peer-hover:block">
                    @pedulilansia_2f
                  </p>
                </a>
                <a
                  href="mailto:pedulilansia21@gmail.com"
                  className="flex gap-3 items-center md:h-10 md:w-10 md:hover:w-auto duration-500 transition-all text-white hover:text-blue-500 md:justify-start justify-center"
                >
                  <MailFilled className=" text-3xl peer" />
                  <p className=" md:hidden md:peer-hover:block">
                    pedulilansia21@gmail.com
                  </p>
                </a>
                <a
                  href="https://wa.me/+6288245097109"
                  className="flex gap-3 items-center md:h-10 md:w-10 md:hover:w-auto duration-500 transition-all text-white hover:text-blue-500 md:justify-start justify-center"
                >
                  <WhatsAppOutlined className=" text-3xl peer" />
                  <p className=" md:hidden md:peer-hover:block">
                    0882-4509-7109
                  </p>
                </a>
              </div>
            </div>

            <div className="text-xl md:col-span-4 lg:col-span-2">
              <Link href={"/#feature"}>
                <div className="mb-4 text-light-3 cursor-pointer">
                  Kelebihan
                </div>
              </Link>
              <Link href={"/#about-us"}>
                <div className="mb-4 text-light-3 cursor-pointer">
                  Pelayanan
                </div>
              </Link>
            </div>

            <div className="text-xl md:col-span-4 lg:col-span-2">
              <Link href={"/report"}>
                <div className="mb-4 text-light-3 cursor-pointer">
                  Buat aduan keluhan kesehatan
                </div>
              </Link>
            </div>

            <div className="text-xl md:col-span-4 lg:col-span-2">
              <Link href={"/information"}>
                <div className="mb-4 text-light-3 cursor-pointer">
                  Informasi terkait lansia
                </div>
              </Link>
            </div>
          </div>
          <p className="mt-5 text-base font-normal text-slate-300 flex md:justify-start justify-center">
            &copy; 2022 &nbsp; All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
