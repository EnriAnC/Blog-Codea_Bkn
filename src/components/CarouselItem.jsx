import React, { memo } from 'react'
import useViewTransition from '../customHooks/useViewTransition'

const CarouselItem = ({blog, index}) => {

  const {handleViewTransition} = useViewTransition()
  
  return (
    <div className={`carousel-item ${index===0 ? 'active': ''}`} 
    data-bs-interval="10000"
    style={{height:"100%"}}>
        <img src={blog.img} className="d-block w-100 h-100 object-fit-cover" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
            <h5 className='text-white bg-black py-2 m-0'
            onClick={handleViewTransition(`blog/${blog.id}`)}>{blog.title}</h5>
        </div>
    </div>
  )
}

export default memo(CarouselItem)