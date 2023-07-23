import React, { useEffect, useMemo, useState } from 'react'
import chooseRandomBlogs from '../utils/chooseRandomBlogs.js'
import { useBlogsContext } from '../context/blogsContext.js';
import CarouselItem from './CarouselItem.jsx';

const Carousel = () => {

    const { blogs } = useBlogsContext()

  // Memorizamos el resultado de la función chooseRandomBlogs
    const memoizedRandomBlogs = useMemo(() => chooseRandomBlogs(blogs, 3), [blogs]);

  return (

    <div id="carouselExampleDark" className="carousel carousel-dark slide object-fit-contain">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner d-flex align-items-center"
         style={{aspectRatio: "16 / 8", }}>
            {
                Object.values(memoizedRandomBlogs).map((blog, i)=>(
                    <CarouselItem key={i} blog={blog} index={i}/>
                ))
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    
  )
}

export default Carousel