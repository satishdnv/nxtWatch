import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdCloseCircleOutline} from 'react-icons/io'
import {useState} from 'react'
import Navlinks from './Navlinks'

import classes from './NavBar.module.css'
import './index.css'

const NavbarMobileNavigation = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <GiHamburgerMenu
      className={classes.Hamburger}
      onClick={() => setOpen(!open)}
    />
  )
  const closeIcon = (
    <IoMdCloseCircleOutline
      className={classes.Hamburger}
      onClick={() => setOpen(!open)}
    />
  )
  return (
    <nav className={classes.MobileNavigation}>
      {open && <Navlinks />}
      {open ? closeIcon : hamburgerIcon}
    </nav>
  )
}

export default NavbarMobileNavigation
