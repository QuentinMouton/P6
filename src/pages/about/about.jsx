import Banner from '../../components/banner/banner'
import GalleryCollapse from '../../components/galleryCollapse/galleryCollapse'

import './about.sass'

import BannerAbout from '../../assets/bannerAbout.png'

// Création de la page "about"
// Affiche les composants "banner" et "galleryCollapse"
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
