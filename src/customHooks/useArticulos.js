// useArticulos.js
import { useState, useEffect } from 'react';

const useArticulos = () => {
  const [articulos, setArticulos] = useState([]);

  const cargarArticulos = async () => {
    try {
      const articulosLS = JSON.parse(localStorage.getItem('blogs'));
      if (articulosLS) return articulosLS;
      const response = await fetch('/blogs.json');
      const data = await response.json();

      const articlesById = {};
      for (const articulo of data) {
        articlesById[articulo.id] = articulo;
      }
      articlesById.length = data.length

      localStorage.setItem('blogs', JSON.stringify(articlesById));
      return data;
    } catch (error) {
      console.error('Error al cargar los artículos:', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await cargarArticulos();
      setArticulos(data);
    }
    fetchData();
  }, []);

  
  useEffect(()=>{
    console.log(articulos)
  }, [articulos])

  return [articulos, setArticulos];
};

export default useArticulos;
