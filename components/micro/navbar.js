
import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
export default function Navbar() {
    const [hidden, setHidden] = React.useState(true);

    const handleNavbar = () => setHidden(!hidden)

    return (
        <nav className="fixed z-50 w-full  px-4 mx-auto max-w-screen-2xl lg:px-24 md:backdrop-blur-md md:bg-transparent bg-white md:shadow-none shadow-2xl pb-5">
            <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
                <div className='w-10 h-10 z-19 relative top-3'>
                    <Image objectFit='contain' layout='fill'
                        src="/logo_pedulilansia.svg"
                        alt="logo pedulilansia" />
                </div>
                <div className="flex items-center justify-between">
                    {/* <!-- LOGO --> */}
                    {/* <!-- RESPONSIVE NAVBAR BUTTON TOGGLER --> */}
                    <div>
                        <button className="block p-1 outline-none lg:hidden mobile-menu-button absolute right-8 top-3"
                            data-target="#navigation" onClick={handleNavbar}>
                            <MenuOutlined className='text-2xl' />
                        </button>
                    </div>

                    <div className={`${hidden ? 'hidden' : null} w-full mobile-menu lg:block`} id="navigation">
                        <div
                            className="flex flex-col items-baseline justify-between   md:mt-0 mt-10 lg:flex-row lg:items-center">
                            <div
                                className="flex flex-col w-full ml-0 font-normal lg:flex-row text-white-1 lg:ml-44 lg:w-max z-10">
                                <a href="#" className="text-black py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 md:text-left text-right md:pr-auto pr-3">SERVICE</a>
                                <a href="#" className="text-black py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 md:text-left text-right md:pr-auto pr-3">PORTFOLIO</a>
                                <a href="#" className="text-black py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 md:text-left text-right md:pr-auto pr-3">ABOUT US</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}