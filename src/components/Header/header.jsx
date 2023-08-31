import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import  "../../components/Header/header.css"

function Header() {
  return <header className='header-container'>
    <div className="logo">
      <Link to='/'className='header-logo'>
      <img src={logo} alt="kasa"/></Link>
      </div>
      <div className= 'header-nav'>
      <Link to="/" className="nav">Accueil</Link>
      <Link to="/About" className="nav">A propos</Link>     
      </div>
      </header>
}

export default Header