import React from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams para obtener el ID del artículo desde la URL

const Articulo = ({ articulos }) => {
  // Obtén el ID del artículo desde la URL utilizando useParams
  const { id } = useParams();

  // Busca el artículo correspondiente en el array de artículos
  const articulo = articulos[id]

  // Si no se encuentra el artículo, puedes mostrar un mensaje de error o redirigir a una página de 404
  if (!articulo) {
    return <div>El artículo no existe.</div>;
  }

  // Extrae los detalles del artículo
  const { title, description, body, img, author, date, tags, likes, comments } = articulo;

  return (
    <div>
      <h5 className='mt-3 mx-3 ' style={{viewTransitionName:`title-${id}`, textAlign:"center"}}>{title}</h5>
      <div className='row py-3 px-5'>
        <img
          className='img-articulo-size object-fit-cover d-inline-block col'
          src={`../../../bg-x.png`} 
          alt="imagen_articulo" 
          style={{viewTransitionName: `blog-${id}`, height:"220px"}}/>
        <p className='col fs-3  '>{description}</p>
        <p className='fs-4 p-4'>{body}</p>
        <p>
            <span>{author}</span> 
            <span>{date}</span>
            <span>{tags}</span>
            <span>{likes}</span>
            {/* <span>{comments}</span>0 */}
        </p>
      </div>
    </div>
  );
};

export default Articulo;
