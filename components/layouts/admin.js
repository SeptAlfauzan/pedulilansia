import React from 'react';
import Sidebar from '../micro/sidebar';

export default function AdminLayout({ children }) {
    return (
        <div className='w-screen h-screen md:px-10 md:py-20 px-8 py-10 flex bg-blue-100'>
            <Sidebar />
            <div className='grow flex flex-col overflow-x-auto '>
                {children}
            </div>
        </div>
    )
}
