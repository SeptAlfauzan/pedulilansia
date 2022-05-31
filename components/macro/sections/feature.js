import { CheckOutlined, RocketOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function Feature(props) {
  return (
    <section
      className="min-h-screen feature-section bg-blue-50 relative pb-10"
      id="feature"
    >
      <main className="px-4 pt-32 pb-0 mx-auto max-w-screen-2xl lg:px-24 how-can md:pb-24">
        <h1 className="font-semibold leading-snug text-center md:leading-9 text-40">
          Bagaimana kami dapat membantu anda?{" "}
        </h1>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-8 md:px-40 gap-11 mt-14 mx-auto justify-items-center">
          <div className="md:col-span-6 lg:col-span-4">
            <div className="p-8 bg-white rounded-3xl">
              <CheckOutlined className="text-3xl text-emerald-400 border-2 rounded-full w-14 h-14 flex items-center justify-center border-emerald-400" />
              <div className="mt-10 text-2xl font-bold card-title">Mudah </div>
              <p className="mt-4 text-base font-normal leading-6 text-grey-1">
                Hanya dengan beberapa klik dan mengisi data pada formulir yang
                disediakan, anda dapat dengan mudah membuat pengaduan masalah
                kesehatan
              </p>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-4">
            <div className="p-8 bg-white rounded-3xl">
              <RocketOutlined className="text-3xl text-pink-400 border-2 rounded-full w-14 h-14 flex items-center justify-center border-pink-400" />
              <div className="mt-10 text-2xl font-bold card-title">Cepat</div>
              <p className="mt-4 text-base font-normal leading-6 text-grey-1">
                Aduan yang anda sampaikan melalui formulir yang disediakan, akan
                diproses secara cepat
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
