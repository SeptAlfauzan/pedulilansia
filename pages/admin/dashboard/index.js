import React from 'react';
import AdminLayout from '../../../components/layouts/admin';
import Table from '../../../components/micro/table';

export default function Dashboard() {
    return (
        <AdminLayout>
            <div className='bg-white px-3 py-5 rounded mb-3'>
                <h3 className='text-xl'>
                    Data Lansia
                </h3>
                <button className='bg-slate-600 text-white px-3 py-1 rounded-lg mt-3'>Export data</button>
            </div>
            <Table />
        </AdminLayout>
    )
}
