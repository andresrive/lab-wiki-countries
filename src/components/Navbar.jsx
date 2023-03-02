import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">LAB - WikiCountries</span>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link></Link>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>

    )
}