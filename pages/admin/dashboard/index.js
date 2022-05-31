import React from "react";
import AdminLayout from "../../../components/layouts/admin";
import Table from "../../../components/micro/table";
import Link from "next/link";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="bg-white md:px-20 px-5 py-5 rounded mb-3">
        Selamat datang
        <Link href={"/admin/reports"}>
          <div className="px-10 md:w-2/5 mt-3 h-40 hover:bg-pink-600 rounded-lg hover:text-white transition-all duration-150 bg-slate-50 relative pt-5 cursor-pointer">
            <h3 className="text-xl">Jumlah Laporan Keluhan</h3>
            <span className="absolute bottom-5 text-6xl text-blue-800 right-10">
              1000
            </span>
          </div>
        </Link>
      </div>
    </AdminLayout>
  );
}
