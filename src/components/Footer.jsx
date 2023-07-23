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
    <footer class="py-3 position-relative bottom-0 mt-5" style={{backgroundColor:"orange"}}>
      <ul class="nav justify-content-center pb-3 mb-3">
        <li class="nav-item">
          <Link to="/" class="nav-link px-2 text-muted"
            onClick={handleViewTransition('/')}>Inicio</Link>
        </li>
        <li class="nav-item">
          <Link to="/crear-articulo" class="nav-link px-2 text-muted"
            onClick={handleViewTransition('/crear-articulo')}>Crear blog</Link>
        </li>
        <li class="nav-item">
          <Link to="/calculadora-factorial" class="nav-link px-2 text-muted"
            onClick={handleViewTransition('/calculadora-factorial')}>Calculadora</Link>
        </li>
      </ul>
      <p class="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  )
}

export default Footer