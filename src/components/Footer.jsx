import React from 'react'
import { flushSync } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  const handleViewTransition = (to) => (ev) => {
      if (!document.startViewTransition) return;
      ev.preventDefault();
      document.startViewTransition(() => {
          flushSync(() => {
              navigate(to);
          });
      });
  };

  return (
    <footer className="py-3 position-relative bottom-0 mt-5" style={{backgroundColor:"orange"}}>
      <ul className="nav justify-content-center pb-3 mb-3">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted"
            onClick={handleViewTransition('/')}>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/crear-articulo" className="nav-link px-2 text-muted"
            onClick={handleViewTransition('/crear-articulo')}>Crear blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/calculadora-factorial" className="nav-link px-2 text-muted"
            onClick={handleViewTransition('/calculadora-factorial')}>Calculadora</Link>
        </li>
      </ul>
      <p className="text-center text-muted">© 2023 EnriAnC, Dev</p>
    </footer>
  )
}

export default Footer