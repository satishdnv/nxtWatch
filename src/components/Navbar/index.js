import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {BiLogOut} from 'react-icons/bi'
import NavbarMobileNavigation from './NavbarMobileNavigation'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const image1 =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const image2 =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Navbar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTheTheme} = value

      const renderDarkTheme = () => {
        changeTheTheme()
      }

      const logout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const navBarClass = isDark ? 'navbar-container2' : 'navbar-container1'
      const imageUrl = isDark ? image1 : image2
      const iconClass = isDark ? 'menu-icon2' : 'menu-icon1'

      return (
        <div className={navBarClass}>
          <div className="nav-bar-mobile-logo-container">
            <Link to="/">
              <img className="website-logo" src={imageUrl} alt="website logo" />
            </Link>
          </div>
          <div className="navbar-link-container">
            <button
              className="btn-dark"
              type="button"
              onClick={renderDarkTheme}
            >
              dark
            </button>
            <NavbarMobileNavigation />

            <BiLogOut className={iconClass} onClick={logout} />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Navbar)
