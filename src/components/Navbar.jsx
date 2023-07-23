import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { flushSync } from 'react-dom';

const Navbar = () => { 

    const navigate = useNavigate()
    const blogRef = useRef()

    const handleViewTransition = (to) => (ev) => {
        if (!document.startViewTransition) return;
        ev.preventDefault();
        document.startViewTransition(() => {
            flushSync(() => {
                navigate(to);
            });
        });
    };

    useEffect(()=>{
        console.log(window.scrollY ) 
        let id = location.pathname.split('articulo');
        id = id[1] ? id[1].split('/')[1] : null
        if (!Boolean(id)) return 
        blogRef.current = window.scrollY
    }, [location.pathname])

    useEffect(()=>{
        console.log(window.scrollY ) 
        // blogRef.current = document.getElementById(`blog_${blogRef.current}`).scrollTop
        window.scroll(0, blogRef.current)
    }, [location.pathname, blogRef.current])
    


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top z-3"
            style={{viewTransitionName:"nav"}}
            >
            <div className="container-fluid">
                <Link className="navbar-brand logo_blog" to="/" onClick={handleViewTransition('/')}
                data-bs-toggle="collapse">
                    <span>Blog</span> <span className="blinking-text top-500"> | </span> <span>Codea_BKN</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" 
                            onClick={handleViewTransition('/')}
                            data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="crear-articulo"
                            onClick={handleViewTransition('/crear-articulo')}
                            data-bs-toggle="collapse" data-bs-target="#navbarNav">Crear articulo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="sobre-mi"
                            onClick={handleViewTransition('/calculadora-factorial')}
                            data-bs-toggle="collapse" data-bs-target="#navbarNav">Calculadora Factorial</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar