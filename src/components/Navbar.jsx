import React from 'react'
import { Link } from 'react-router-dom'
import useViewTransition from '../customHooks/useViewTransition';

const Navbar = () => { 

    const {handleViewTransition} = useViewTransition()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top z-3"
            style={{viewTransitionName:"nav"}}
            >   
            <div className="container-fluid">
                <Link className="navbar-brand logo_blog" to="/"
                onClick={handleViewTransition('/')}>
                    <span>Blog</span> 
                    <span className="blinking-text top-500"> | </span> 
                    <span>Codea_BKN</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" 
                            onClick={handleViewTransition('/')}
                            >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="crear-articulo"
                            onClick={handleViewTransition('/crear-articulo')}
                            >Crear articulo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="calculadora-factorial"
                            onClick={handleViewTransition('/calculadora-factorial')}
                            >Calculadora Factorial</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar