  import React, { memo, useMemo } from 'react'
  import Card from '../components/ArticleCard'
  import { useBlogsContext } from '../context/blogsContext.js'
  import Carousel from '../components/Carousel'

  const Inicio = ({}) => {

    const { blogs } = useBlogsContext()

    const blogList = useMemo(() => Object.values(blogs), [blogs]);

    return (
      <div className='py-2' id='articles-container'>
          <h1>Descubre lo más visto!</h1>
          <Carousel/>
          <h2>Articulos recientes</h2>
          <div className="grid-width-responsive-260px400px">
              {blogList.map(articulo=>(
                  <Card key={articulo.id} id={`blog_${articulo.id}`} articulo={articulo}/>
              ))}
          </div>

      </div>
    )
  }

  export default memo(Inicio)