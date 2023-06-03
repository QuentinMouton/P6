import { Link, useLocation } from 'react-router-dom'

import '../styles/components/header/header.css'

import logo from '../assets/logoHead.svg'

const Header = () => {
  const location = useLocation()
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo-kaza" />
      </div>
      <ul className="header__navbar">
        <li>
          <Link
            className={
              location.pathname === '/'
                ? 'active header__navbar__link'
                : 'header__navbar__link'
            }
            to="/"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname === '/about'
                ? 'active header__navbar__link'
                : 'header__navbar__link'
            }
            to="/about"
          >
            A propos
          </Link>
        </li>
      </ul>
    </header>
  )
}
export default Header
