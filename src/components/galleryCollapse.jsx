import { textCollapse } from '../datas/textCollapse'
import Collapse from './collapse'

import '../styles/components/galleryCollapse/galleryCollapse.sass'

// Création du composant qui gère la galerie qui contient le composant "collapse"
//Page "about"
const GalleryCollapse = () => {
  return (
    <div className="gallery__collapse">
      {textCollapse.map((e) => (
        <Collapse
          key={`${e.label}-${e.content}`}
          label={e.label}
          text={e.content}
        />
      ))}
    </div>
  )
}
export default GalleryCollapse
