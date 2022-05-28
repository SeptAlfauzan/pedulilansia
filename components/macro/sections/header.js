import Image from 'next/image';

export default function Header(props) {
    return (
        <section className="header-workly relative">
            <header className="lg:pb-28">
                <nav className="fixed z-50 w-full  px-4 mx-auto max-w-screen-2xl lg:px-24 backdrop-blur-md">
                    <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
                        <div className="flex items-center justify-between">
                            {/* <!-- LOGO --> */}
                            <div> <Image objectFit='contain' layout='fill'
                                src="https://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header-workly/Logo.svg"
                                alt="workly" /> </div>
                            {/* <!-- RESPONSIVE NAVBAR BUTTON TOGGLER --> */}
                            <div>
                                <button className="block p-1 outline-none lg:hidden mobile-menu-button"
                                    data-target="#navigation">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white-1" x-show="!showMenu"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 8h16M4 16h16"> </path>
                                        <path strokeLinecap="round" className="hidden w-7 h-7" strokeLinejoin="round"
                                            strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="hidden w-full mobile-menu lg:block" id="navigation">
                            <div
                                className="flex flex-col items-baseline justify-between mt-6 lg:flex-row lg:items-center lg:mt-0">
                                <div
                                    className="flex flex-col w-full ml-0 font-normal lg:flex-row text-white-1 lg:ml-44 lg:w-max">
                                    <a href="#" className="py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0">SERVICE</a> <a
                                        href="#" className="py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0">PORTFOLIO</a> <a href="#" className="py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0">ABOUT US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <!-- START: HERO BACKGROUND --> */}
                <div className="mx-auto hero-bg max-w-screen-2xl max-h-full">
                    <div className="flex justify-end invisible lg:visible w-full ">
                        <div className='absolute w-2/5 h-full grayscale hover:grayscale-0 z-10 right-0'>
                            <Image objectFit='cover' layout='fill' src="/images/images-bg.jpg"
                                alt="background" className=" absolute top-0 z-0 object-cover h-full" />
                        </div>
                    </div>
                </div>
                {/* <!-- END: HERO BACKGROUND --> */}
                <div className="relative z-10 px-4 mx-auto mt-20 hero md:mt-24 max-w-screen-2xl lg:px-24">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                        <div className="md:col-span-11 lg:col-span-7">
                            <div
                                className="text-5xl font-semibold leading-normal hero-title text-white-2 md:text-6xl leading-px85">
                                One platform to boost your business </div>
                            <div
                                className="mt-8 text-xl font-normal leading-8 hero-description text-subtleGreen lg:leading-9 md:text-2xl">
                                Learn how to manage your business efficiently with a platform trusted by global leaders.
                            </div>
                            <div className="mt-20"> <a href=""
                                className="px-10 py-4 text-2xl font-semibold rounded-lg bg-white-2 text-darkGreen">Get
                                Started</a> </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script>
          $(document).ready(function () {
            $(".mobile-menu-button").each(function (_, navToggler) {
              var target = $(navToggler).data("target");
              $(navToggler).on("click", function () {
                $(target).animate({
                  height: "toggle",
                })
              })
            })
          })
        </script> */}
        </section>
    )
}