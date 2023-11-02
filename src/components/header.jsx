import '../styles/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <p>TinyLib</p>
        <Link to="/library">Go to library</Link>
      </header>
    </div>
  )
}

export default Header;