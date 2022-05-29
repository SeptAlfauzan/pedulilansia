import Image from 'next/image';
export default function Gallery(props) {
    return (<section className="products">
        {/* <!-- RIGHT CIRCLE ORNAMENT --> */}
        <div className="mx-auto max-w-screen-2xl">
            <div className="flex items-center justify-end"> <svg width="316" height="560" viewBox="0 0 316 560" fill="none"
                className="absolute" xmlns="http://www.w3.org/2000/svg">
                <circle cx="280" cy="280" r="279" stroke="url(#paint0_linear_154:119)" strokeWidth="2" />
                <defs>
                    <linearGradient id="paint0_linear_154:119" x1="0" y1="0" x2="560" y2="560"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#36745D" />
                        <stop offset="1" stopColor="#155367" />
                    </linearGradient>
                </defs>
            </svg> </div>
        </div>
        <main className="relative z-30 px-4 pb-0 mx-auto md:pb-28 our-platform pt-36 max-w-screen-2xl lg:px-24">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="md:col-span-10">
                    <h1 className="font-semibold leading-snug  md:leading-9 text-40"> Pelayanan Kami
                    </h1>
                    <p className="text-xl font-normal leading-8 md:leading-9 md:text-2xl text-grey-1 mt-7"> Kami berkomitmen untuk menyediakan platform pengaduan masalah kesehatan bagi lansia yang mudah dijangkau oleh masyarakat. Dengan hanya perlu mengisi form pendataan, kami akan segera memberikan pelayan kesehatan ke anda secara segera.</p>
                </div>
            </div>
            <div className="relative min-h-screen mb-10 grid grid-flow-col grid-rows-4 gap-4 mt-12 md:gap-5 md:mt-24">
                <div className="row-span-2 md:row-span-4 md:col-span-3  relative"> <Image objectFit='cover' layout='fill'
                    src="/images/images-1.jpg"
                    alt="workly" className="object-cover h-full rounded-lg md:rounded-xl w-px400" /> </div>
                <div className="row-span-2 col-span-2 md:col-span-2 md:row-span-2  relative"> <Image objectFit='cover' layout='fill'
                    src="/images/images-2.jpg"
                    alt="workly" className="object-cover h-full rounded-lg md:rounded-xl w-px400" /> </div>
                <div className="row-span-2 relative  md:row-span-2 md:col-span-2"> <Image objectFit='cover' layout='fill'
                    src="/images/images-4.jpg"
                    alt="workly" className="object-cover h-full rounded-lg md:rounded-xl w-px400" /> </div>
                {/* <div className="row-span-2"> <Image objectFit='contain' layout='fill'
                    src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/porto-4.png"
                    alt="workly" className="object-cover h-full rounded-lg md:rounded-xl w-px400" /> </div> */}
            </div>
        </main>
    </section>
    )
}