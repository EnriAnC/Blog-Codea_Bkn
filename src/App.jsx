import { Routes, Route } from "react-router-dom"
import './App.css'
import Inicio from './pages/Inicio.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CalculadoraFactorial from './pages/CalculadoraFactorial'
import NuevoArticulo from './pages/NuevoArticulo.jsx'

import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap/dist/css/bootstrap.min.css"


import Articulo from "./pages/Articulo"
import BlogsProvider from "./context/blogs/BlogsProvider"
import { ScrollProvider } from "./context/scroll/ScrollContext"

function App() {

  return (
    <>
      <Navbar />
      <BlogsProvider>
        <ScrollProvider>
          <main className="container" id="main" style={{paddingTop: "56px"}}>
            <Routes>
              <Route path="/" element={ <Inicio /> } />
              <Route path="/crear-articulo" element={ <NuevoArticulo /> } />
              <Route path="/calculadora-factorial" element={ <CalculadoraFactorial /> } />
              <Route path="/articulo/:id" element={ <Articulo /> } />
            </Routes>
          </main> 
        </ScrollProvider>
      </BlogsProvider>
        
      <Footer />
    </>
  )
}

export default App
