import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { HomeOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';

export default function Sidebar() {
    const [minimize, setMinimize] = React.useState(false);
    const router = useRouter();
    const toggleMinimize = () => setMinimize(!minimize);
    const handleLogout = async () => {
        try {
            await axios.get('/api/auth?logout=true');
            router.push('/login')
        } catch (error) {
            console.log(error.message)
        }
    }

    React.useEffect(() => {
        if (window.innerWidth < 680) setMinimize(true)
    }, [])

    return (
        <aside className={`${!minimize ? 'w-56' : 'w-20'} z-10 transition-all duration-300`} aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded md:h-auto h-screen md:shadow-none shadow-lg fixed md:left-auto left-0 flex flex-col">
                <button className='bg-white px-2 py-1 self-end hover:bg-slate-200 duration-100' onClick={toggleMinimize}>
                    {!minimize ? (
                        <MenuFoldOutlined />
                    ) : (
                        <MenuUnfoldOutlined />
                    )}
                </button>
                <ul className="space-y-2">
                    <li>
                        <a href="/admin/dashboard" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                            <HomeOutlined />
                            <div className={`${minimize ? 'hidden' : null}`}>
                                <span className="ml-3">Dashboard</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                            <ProfileOutlined />
                            <div className={`${minimize ? 'hidden' : null}`}>
                                <span className="flex-1 ml-3 whitespace-nowrap">Keluhan</span>
                                <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/admins" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                            <UserOutlined />
                            <div className={`${minimize ? 'hidden' : null}`}>
                                <span className="flex-1 ml-3 whitespace-nowrap">Admin</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/elders" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                            <UserOutlined />
                            <div className={`${minimize ? 'hidden' : null}`}>
                                <span className="flex-1 ml-3 whitespace-nowrap">Lansia</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                            <LogoutOutlined />
                            <div className={`${minimize ? 'hidden' : null}`}>

                                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}