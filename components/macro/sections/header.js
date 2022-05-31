import Image from "next/image";
import Navbar from "../../micro/navbar";

export default function Header(props) {
  return (
    <section className=" relative">
      <header className="lg:pb-28 pb-10">
        {/* <!-- START: HERO BACKGROUND --> */}
        <div className="mx-auto hero-bg max-w-screen-2xl max-h-full">
          <div className="flex justify-end invisible lg:visible w-full ">
            <div className="absolute w-2/5 h-full grayscale hover:grayscale-0 z-10 right-0">
              <Image
                objectFit="cover"
                layout="fill"
                src="/images/images-bg.jpg"
                alt="background"
                className=" absolute top-0 z-0 object-cover h-full"
              />
            </div>
          </div>
        </div>
        {/* <!-- END: HERO BACKGROUND --> */}
        <div className="relative z-10 px-4 mx-auto mt-20 hero md:mt-24 max-w-screen-2xl lg:px-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-11 lg:col-span-7">
              <div className="text-5xl font-semibold leading-normal hero-title md:text-6xl leading-px85">
                Selamat datang di Peduli Lansia
              </div>
              <div className="mt-8 text-xl font-normal leading-8 hero-description text-subtleGreen lg:leading-9 md:text-2xl">
                Satu platform untuk memberikan layanan pengaduan masalah
                kesehatan bagi lansia
              </div>
              <div className="mt-20">
                {" "}
                <a
                  href=""
                  className="px-10 py-4 text-2xl font-semibold rounded-lg bg-white-2 text-darkGreen"
                >
                  Get Started
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

{
  /* <script src="https://code.jquery.com/jquery-3.6.0.min.js"
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
        </script> */
}
