import React from "react";
import AdminLayout from "../../../components/layouts/admin";
import Table from "../../../components/micro/table";
import Link from "next/link";
import axios from "axios";

export default function Dashboard() {
    const [reports, setReports] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            setReports(await (await axios.get('/api/report')).data)
        }
        try {
            fetchData()
        } catch (error) {
            console.log(error.message)
        }
    }, [])
    return (
        <AdminLayout>
            <div className="bg-white md:px-20 px-5 py-5 rounded mb-3">
                Selamat datang
                <Link href={"/admin/reports"}>
                    <div className="px-10 md:w-2/5 mt-3 h-40 hover:bg-pink-600 rounded-lg hover:text-white transition-all duration-150 bg-slate-50 relative pt-5 cursor-pointer">
                        <h3 className="text-xl">Jumlah Laporan Keluhan</h3>
                        <span className="absolute bottom-5 text-6xl text-blue-800 right-10">
                            {reports.length}
                        </span>
                    </div>
                </Link>
            </div>
        </AdminLayout>
    );
}
