import React from 'react'
import { Link } from 'react-router-dom'
import useViewTransition from '../customHooks/useViewTransition'

const OffcanvasNavbar = () => {

    const { handleViewTransition } = useViewTransition()

  return (
    <nav className="navbar bg-transparent fixed-top z-1"
    style={{viewTransitionName:"offcanvasNav"}}>
        <div className="container-fluid">
            <Link className="navbar-brand logo_blog" to="/"
            onClick={handleViewTransition('/')}
            style={{viewTransitionName:"ttt"}}>
                <span>Codea<b className="blinking-text top-500"> _ </b>BKN</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Codea_BKN</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <Link className="nav-link active" to="/" 
                        onClick={handleViewTransition('/')}
                        >Inicio</Link>
                    </li>
                    <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <Link className="nav-link" to="crear-articulo"
                        onClick={handleViewTransition('/crear-articulo')}
                        >Crear articulo</Link>
                    </li>
                    <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <Link className="nav-link" to="calculadora-factorial"
                        onClick={handleViewTransition('/calculadora-factorial')}
                        >Calculadora Factorial</Link>
                    </li>
                </ul>
                {/* <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>
            </div>
        </div>
    </nav>
  )
}

export default OffcanvasNavbar