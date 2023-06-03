import Banner from '../components/banner'
import GalleryCollapse from '../components/galleryCollapse'

import BannerAbout from '../assets/bannerAbout.webp'

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
