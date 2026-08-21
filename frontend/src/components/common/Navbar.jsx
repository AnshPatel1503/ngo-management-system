import { Link } from "react-router-dom";

export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    NGO Management
                </Link>

                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/events">Events</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/donate">Donate</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Admin</Link>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

}