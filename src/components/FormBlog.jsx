import React, { useState } from 'react'
import FormModal from './FormModal.jsx';

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

const FormBlog = () => {

    const [formData, setFormData] = useState(blogMock)

    const [showModal, setShowModal] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitData = Object.fromEntries(new FormData(e.target))
        setFormData((prevFormData=>{
          if (!prevFormData.img) prevFormData.img = 'bg-x.png'
          return {...prevFormData, ...submitData, img: prevFormData.img}
        })) 
        setShowModal(true)
    };

    const handleInputChange = (e) => {
        if (e.target.name === 'img') {
          const file = e.target.files[0];
          const MAX_SIZE_KB = 256
          if (file && file.size <= MAX_SIZE_KB * 1024) {
            // Leemos la imagen con FileReader y la guardamos en el estado formData
            const reader = new FileReader();
            reader.onloadend = () => {
              setFormData(formData=>({...formData, img:reader.result}))
            };
            reader.readAsDataURL(file);
          } else {
            alert('Sobrepasa los 256KB')
            e.target.value = ""
          }
        }
        
      };

    
      return (
        <>
          <FormModal showModal={showModal} setShowModal={setShowModal} formData={formData} />
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
                <label htmlFor="img" className='fs-6 p-1 text-black-50'>MAX: 256kb; Se guarda en LocalStorage</label>
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
        </>
        
      );
}

export default FormBlog 