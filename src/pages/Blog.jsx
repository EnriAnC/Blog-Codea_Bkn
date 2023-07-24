import React, { memo, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams para obtener el ID del artículo desde la URL
import { useBlogsContext } from '../context/blogs/blogsContext.js';

const Blog = () => {

  const { blogs } = useBlogsContext()
  // ID del artículo desde la URL utilizando useParams
  const { id } = useParams();

  // Busca el artículo correspondiente en el array de artículos
  const articulo = blogs[id]

  // Si no se encuentra el artículo, puedes mostrar un mensaje de error o redirigir a una página de 404
  if (!articulo) {
    return <div>El artículo no existe.</div>;
  }


  useLayoutEffect(()=>{
    window.scroll(0, 0)
  },[])

  // Extrae los detalles del artículo
  const { title, description, body, img, author, date, tags, likes, comments } = articulo;

  return (
    <>
      <h5 className='mt-3 mx-3 fs-2' style={{viewTransitionName:`title-${id}`, textAlign:"center"}}>{title}</h5>
      <div className='row gx-0 gap-4 py-3'>
        <img
          className='img-articulo-size col-12 col-md-6'
          src={img?.includes("data:image") ? img : `../${img}`} 
          alt="imagen_articulo" 
          style={{viewTransitionName: `blog-${id}`, minHeight:"220px"}}/>
        <p className='col fs-3'
          style={{
            viewTransitionName: `body-${id}`,
        }}>{description}</p>
        <p className='fs-4'>{body}</p>
      
        <div className="d-flex justify-content-between">
          <p>Autor: {author}</p> 
          <p>{date}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className='border rounded-5 py-1 ps-3 pe-2 '>{likes} <span role="icon" aria-label="Me gusta">👍</span></p>
          <p className='border rounded-5 py-1 ps-3 pe-2 '><i>Tags: {tags ? tags.join(', ') : '---'}</i></p>
        </div>
        {/* <p>{comments}</p>0 */}
        
      </div>
    </>
  );
};

export default memo(Blog)
