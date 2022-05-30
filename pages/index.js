import UserLayout from '../components/layouts/user'
import Feature from '../components/macro/sections/feature'
import Gallery from '../components/macro/sections/gallery'
import Header from '../components/macro/sections/header'

export default function Home() {
  return (
    <UserLayout>
      <Header />
      <Feature />
      <Gallery />
    </UserLayout>
  )
}
