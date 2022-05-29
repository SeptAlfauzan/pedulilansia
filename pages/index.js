import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/macro/sections/feature'
import Footer from '../components/macro/sections/footer'
import Gallery from '../components/macro/sections/gallery'
import Header from '../components/macro/sections/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Peduli lansia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_pedulilansia.svg" />
      </Head>
      <Header />
      <Feature />
      <Gallery />
      <Footer />
    </div>
  )
}
