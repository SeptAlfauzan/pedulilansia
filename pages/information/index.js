import Image from "next/image";
import React from "react";
import UserLayout from "../../components/layouts/user";
import Alert from "../../components/micro/alert";
import Input from "../../components/micro/input";
import inputToObjParser from "../../lib/object";

export default function Information(props) {
  return (
    <UserLayout>
      <section className="flex flex-col items-center justify-center md:pt-30 pt-40 md:px-32 px-12">
        <div className="grid grid-rows-3 grid-cols-2 w-full">
          <h3 className="text-6xl md:col-span-1 col-span-2">
            Informasi umum{" "}
            <span className="font-extralight text-slate-500">
              terkait <span className="text-blue-600">lansia</span>
            </span>
          </h3>
          <div className="md:col-span-1 md:row-span-3  md:block hidden relative -scale-x-100">
            <Image
              src={"/images/images00 (1).png"}
              alt="bg image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="grid  md:grid-rows-6 grid-rows-4 grid-cols-2 w-full gap-8 md:-mt-10 -mt-44 mb-3">
          <div className="md:row-span-2 md:col-span-1 col-span-2">
            <h3 className="text-5xl mb-5">Definisi</h3>
            Menurut undang-undang No.23 tahun 1992 tentang kesehatan, lanjut
            usia adalah seseorang yang karena usianya mengalami perubahan
            biologis, fisik, kejiwaan dan sosial. Perubahan ini akan memberikan
            pengaruh pada seluruh aspek kehidupan, termasuk kesehatannya. Oleh
            karena itu, kesehatan usia lanjut perlu mendapatkan perhatian khusus
            dengan tetap dipelihara dan ditingkatkan agar selama mungkin dapat
            hidup secara produktif sesuai dengan kemampuan sehingga dapat ikut
            serta berperan aktif dalam pembangunan.
          </div>
          <div className="relative md:row-span-3 md:col-span-1 col-span-2 row-span-1 bg-black shadow-lg">
            <Image
              src={"/images/images00 (1).jpg"}
              alt="bg image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative shadow-lg md:row-span-3 row-span-1 md:col-span-1 col-span-2  bg-black md:order-1 order-2">
            <Image
              src={"/images/images00 (2).jpg"}
              alt="bg image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="md:row-span-2 md:col-span-1 col-span-2 md:order-2 order-1">
            <h3 className="text-5xl mb-5">Pembagian kelompok lansia</h3>
            <span className="text-slate-600">
              Menurut WHO, lansia dibagi menjadi empat kelompok, yaitu:
            </span>
            <ul className="mt-3 flex flex-col gap-1">
              <li>
                Usia pertengahan (middle age): usia{" "}
                <span className="text-blue-600">45-59</span> tahun.
              </li>
              <li>
                Lansia (elderly): usia <span className="text-blue-">60-74</span>{" "}
                tahun.
              </li>
              <li>
                Lansia tua (Old): usia{" "}
                <span className="text-blue-600">75-90</span> tahun.
              </li>
              <li>
                Usia sangat tua (Very Old): usia diatas{" "}
                <span className="text-blue-600">90</span> tahun.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </UserLayout>
  );
}
