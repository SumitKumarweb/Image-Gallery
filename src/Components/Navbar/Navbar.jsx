import { Link } from 'react-router-dom';
import logo from './logo.jpg'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <Link to='/'>
                <div className="navbar-wrapper">
                    <img src={logo} alt="" />
                    <h1>Image Gallery</h1>

                </div>
            </Link>
        </>
    )
}

export default Navbar;