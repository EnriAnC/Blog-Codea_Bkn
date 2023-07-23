import React from 'react'
import Card from '../components/ArticleCard'
import { useBlogsContext } from '../context/blogsContext.js'

const Inicio = ({}) => {

  const { blogs } = useBlogsContext()

  return (
    <div className='py-2' id='articles-container'>
        <h1>Esta es la página de inicio</h1>
        <h2>Articulos recientes</h2>
        <div className="grid-width-responsive-260px400px">
            {Object.values(blogs).map(articulo=>(
                <Card key={articulo.id} articulo={articulo}/>
            ))}
        </div>

    </div>
  )
}

export default Inicio