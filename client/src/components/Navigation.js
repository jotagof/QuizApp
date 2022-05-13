import React from 'react'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'

export default function Navigation() {
    const { logout } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href={routes.home}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={routes.questions}>Questions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={routes.answers}>Answers</a>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={logout}>Cerrar sesión</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
