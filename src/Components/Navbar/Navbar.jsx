import logo from './logo.jpg'
import './Navbar.css'

function Navbar(){
    return (
        <div className="navbar-wrapper"> 
            <img src={logo} alt="" />
            <h1>Image Gallery</h1>
        </div>
    )
}

export default Navbar;