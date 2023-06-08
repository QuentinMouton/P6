import Banner from '../components/banner'
import Gallery from '../components/gallery'

import '../styles/pages/home/home.css'

import BannerHome from '../assets/bannerHome.png'

// Création de la page "home"
// Affiche les composants "banner" et "gallery"
const Home = () => {
  const BannerImgHome = [
    {
      title: 'Chez vous, partout et ailleurs',
      src: BannerHome,
      alt: 'Banner Home',
    },
  ]
  return (
    <div className="home">
      {BannerImgHome.map((e) => (
        <Banner
          key={`${e.src}-${e.alt}`}
          title={e.title}
          imgSrc={e.src}
          alt={e.alt}
        />
      ))}

      <Gallery />
    </div>
  )
}
export default Home
