import React from "react";
import AdminLayout from "../../../components/layouts/admin";
import Table from "../../../components/micro/table";
import Link from "next/link";
import { getAll } from "../../../lib/report";
import axios from "axios";

export default function Reports({ report }) {
    const [csv, setCsv] = React.useState(null)

    React.useEffect(() => {
        const fecthCSVData = async () => {
            setCsv(await (await axios.get('/api/report?csv=true')).data)
        }
        fecthCSVData()
    }, []);

    return (
        <AdminLayout>
            <div className="bg-white md:px-20 px-5 py-5 rounded mb-3">
                <div>
                    Daftar laporan keluhan kesehatan
                    <button disabled={!csv} className="bg-pink-600 disabled:bg-pink-300 text-white px-10 py-2 rounded-lg block mt-3 mb-5">
                        <a href={`data:text/csv;charset=utf-8${encodeURI(csv)}`}>
                            Export Data
                        </a>
                    </button>
                </div>
                <Table data={report} />
            </div>
        </AdminLayout>
    );
}

export async function getStaticProps(context) {
    try {
        const report = await getAll()
        return {
            props: { report }, revalidate: 2 // will be passed to the page component as props
        }
    } catch (error) {
        console.log(error)
        return {
            props: {}, // will be passed to the page component as props
        }
    }
}