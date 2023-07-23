import React, { useEffect } from 'react'
import { useBlogsContext } from '../context/blogsContext.js';

const FormBlog = () => {

    const { dispatch } = useBlogsContext()

    const blogMock = {
        id: undefined,
        title: undefined,
        description: undefined,
        body: undefined,
        img: undefined,
        author: undefined,
        date: new Date().toUTCString(),
        tags: [],
        likes: 0,
        comments: []
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitData = Object.fromEntries(new FormData(e.target))
        const blog = {...blogMock, ...submitData, img: blogMock.img}
        dispatch({type:"added", payload:blog})
    };

    const handleInputChange = (e) => {
        if (e.target.name === 'img') {
            console.log(e.target)
          const file = e.target.files[0];
          console.log(file)
          if (file) {
            // Leemos la imagen con FileReader y la guardamos en el estado formData
            const reader = new FileReader();
            reader.onloadend = () => {
              blogMock.img = reader.result
            };
            reader.readAsDataURL(file);
          }
        } else {
          // Aquí actualizas el estado formData con los valores de los otros campos del formulario
        }
      };
    
      return (
        <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
            <legend className='text-center mt-4'>Crear nuevo articulo</legend>

            <div className="form-floating">
                <input type="text" className="form-control" name="title" id='title' placeholder="Titulo" />
                <label htmlFor="title">Titulo</label>
            </div>

            <div className="form-floating">
                <input type="text" className="form-control" name="description" placeholder="Descripción" />
                <label htmlFor="description">Descripción</label>
            </div>

            <div className="form-area">
                <textarea rows="5" cols="10" className="form-control" name="body" placeholder="Contenido" ></textarea>
            </div>

            <div className="form-control">
                <input type="file" className="form-control" name="img" 
                accept="image/jpeg, image/png, image/gif"
                onChange={handleInputChange}/>
            </div>

            <div className="form-floating">
                <input type="text" className="form-control" name="author" placeholder="Autor" />
                <label htmlFor="author">Autor</label>
            </div>

            <div className="form-floating">
                <input type="text" className="form-control" name="tags" placeholder="#tag1, #tag2" />
                <label htmlFor="tags">Tags</label>
            </div>
            
            <button className='btn btn-dark' type="submit">Create Blog Entry</button>
        </form>
      );
}

export default FormBlog 