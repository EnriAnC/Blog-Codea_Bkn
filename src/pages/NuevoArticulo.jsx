import React, { useEffect } from 'react'
import FormBlog from '../components/FormBlog'

const NuevoArticulo = () => {

  useEffect(()=>{
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <FormBlog />
    </>
  )
}

export default NuevoArticulo