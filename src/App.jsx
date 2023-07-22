import { Routes, Route } from "react-router-dom"
import './App.css'
import Inicio from './pages/Inicio.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SobreMi from './pages/SobreMi'
import NuevoArticulo from './pages/NuevoArticulo.jsx'

import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap/dist/css/bootstrap.min.css"


import Articulo from "./pages/Articulo"
import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [articulos, setArticulos] = useState([])

  const cargarArticulos = async () => {
    try {
      const articulosLS = JSON.parse(localStorage.getItem('blogs'))
      if (articulosLS) return articulosLS
      const response = await fetch('/blogs.json');
      const data = await response.json();

      const ArticlesById = {}
      for (const articulo of data) {
        ArticlesById[articulo.id] = articulo
      }

      localStorage.setItem('blogs', JSON.stringify(ArticlesById))
      return data
    } catch (error) {
      console.error('Error al cargar los artículos:', error);
    }
  };

  useEffect(()=>{
    async function fetchData(){
      const data = await cargarArticulos()
      setArticulos(data)
    }
    fetchData()
 
  }, [])

  return (
    <>
      <Navbar />
        <main className="container" id="main" style={{paddingTop: "56px"}}>
          <Routes>
            <Route path="/" element={ <Inicio articulos={articulos} /> } />
            <Route path="crear-articulo" element={ <SobreMi /> } />
            <Route path="sobre-mi" element={ <NuevoArticulo /> } />
            <Route path="articulo/:id" element={ <Articulo articulos={articulos} /> } />
          </Routes>
        </main>
      <Footer />
    </>
  )
}

export default App
