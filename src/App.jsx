import { Routes, Route } from "react-router-dom"
import './App.css'

import Inicio from './pages/Inicio.jsx'
import CalculadoraFactorial from './pages/CalculadoraFactorial'
import NuevoBlog from './pages/NuevoBlog.jsx'
import Blog from "./pages/Blog"

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap/dist/css/bootstrap.min.css"

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
              <Route path="/crear-articulo" element={ <NuevoBlog /> } />
              <Route path="/calculadora-factorial" element={ <CalculadoraFactorial /> } />
              <Route path="/blog/:id" element={ <Blog /> } />
            </Routes>
          </main> 
        </ScrollProvider>
      </BlogsProvider>
        
      <Footer />
    </>
  )
}

export default App
