import {Link} from 'react-router-dom'
import classes from './NavBar.module.css'

const Navlinks = () => {
  console.log(2)
  return (
    <>
      <ul className={classes.NavLinksContainer}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/trending">
          <li>Trending</li>
        </Link>
        <Link to="/gaming">
          <li>Gaming</li>
        </Link>
        <Link to="/savedvideos">
          <li>Saved Videos</li>
        </Link>
      </ul>
    </>
  )
}

export default Navlinks
