import React from "react";
import AdminLayout from "../../../components/layouts/admin";
import Table from "../../../components/micro/table";
import Link from "next/link";

export default function Reports() {
  return (
    <AdminLayout>
      <div className="bg-white md:px-20 px-5 py-5 rounded mb-3">
        <div>
          Daftar laporan keluhan kesehatan
          <button className="bg-pink-600 text-white px-10 py-2 rounded-lg block mt-3 mb-5">
            Export Data
          </button>
        </div>
        <Table />
      </div>
    </AdminLayout>
  );
}
