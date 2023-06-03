import '../styles/components/footer/footer.css'

import logo from '../assets/logoFoot.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__img" src={logo} alt="logo kasa" />
      <p className="footer__paragraph">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer
