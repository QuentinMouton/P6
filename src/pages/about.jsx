import Banner from '../components/banner'
import GalleryCollapse from '../components/galleryCollapse'

import '../styles/pages/about/about.css'

import BannerAbout from '../assets/bannerAbout.png'

// Création de la page "about"
// Affiche les composants "Banner" et "GalleryCollapse"
const About = () => {
  const BannerImgAbout = [
    {
      src: BannerAbout,
      alt: 'Banner About',
    },
  ]
  return (
    <div className="about">
      {BannerImgAbout.map((e) => (
        <Banner key={`${e.src}-${e.alt}`} imgSrc={e.src} alt={e.alt} />
      ))}
      <GalleryCollapse />
    </div>
  )
}
export default About
