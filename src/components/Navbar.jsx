import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { flushSync } from 'react-dom';

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top z-3"
        style={{viewTransitionName:"nav"}}
        >
        <div className="container-fluid">
            <Link className="navbar-brand logo_blog" to="/" onClick={(ev) => {
                if (!document.startViewTransition) return 
                ev.preventDefault();
                
                document.startViewTransition(() => {
                flushSync(() => {
                    navigate(`/`);
                });
                });
            }}>
                <span>Blog</span> <span className="blinking-text top-500"> | </span> <span>Codea_BKN</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
      
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="crear-articulo">Crear articulo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="sobre-mi">Sobre mi</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar