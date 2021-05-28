import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Students List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new-student">Add Student</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;