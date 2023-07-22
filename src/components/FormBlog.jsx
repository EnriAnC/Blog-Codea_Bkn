import React, { useState } from 'react'

const FormBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        date: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o almacenarlos en el estado de tu aplicación.
        console.log(formData);
      };
    
      return (
        <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
            <legend className='text-center mt-4'>Crear nuevo articulo</legend>
            <div className="form-floating">
                <input type="email" className="form-control" name="title" placeholder="Titulo" />
                <label for="title">Titulo</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" name="description" placeholder="Descripción" />
                <label for="description">Descripción</label>
            </div>
            <div className="form-area">
                <textarea rows="5" cols="10" className="form-control" name="body" placeholder="Contenido" ></textarea>
            </div>
            <label>
                <input hidden type="date" name="date" value={formData.date} onChange={handleChange} />
            </label>
            <button className='btn btn-dark' type="submit">Create Blog Entry</button>
        </form>
      );
}

export default FormBlog 