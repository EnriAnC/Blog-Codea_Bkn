import React, { useEffect } from 'react'
import Card from '../components/Card'
import { Link, useNavigate } from 'react-router-dom'
import { flushSync } from 'react-dom';

const Inicio = ({articulos}) => {

  const navigate = useNavigate()

  return (
    <div className='py-2' id='articles-container'>
        <h1>Esta es la página de inicio</h1>
        <h2>Articulos recientes</h2>
        <div className="grid-width-responsive-260px400px">
            {Object.values(articulos).map(articulo=>(
                <Link key={articulo.id} 
                  className="nav-link active" 
                  to={`articulo/${articulo.id}`}
                  onClick={(ev) => {
                    if (!document.startViewTransition) return 
                    ev.preventDefault();
                    
                    document.startViewTransition(() => {
                      flushSync(() => {
                        navigate(`articulo/${articulo.id}`);
                      });
                    });
                  }}>
                    <Card articulo={articulo}/>
                </Link>
                
            ))}
        </div>

    </div>
  )
}

export default Inicio