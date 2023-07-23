import React, { useEffect, useMemo, useState } from 'react'
import chooseRandomBlogs from '../utils/chooseRandomBlogs.js'

const Carousel = ({blogs}) => {

    const [randomBlogs, setRandomBlogs] = useState([]);

  // Memorizamos el resultado de la función chooseRandomBlogs
    const memoizedRandomBlogs = useMemo(() => chooseRandomBlogs(blogs, 3), [blogs]);

    useEffect(() => {
        setRandomBlogs(memoizedRandomBlogs);
    }, [memoizedRandomBlogs]);

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
                randomBlogs.map((blog, i)=>(
                    <div key={i} className={`carousel-item ${i===0 ? 'active': ''}`} 
                    data-bs-interval="10000"
                    style={{height:"100%"}}>
                        <img src={blog.img} className="d-block w-100 h-100 object-fit-cover" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-white bg-black py-2 m-0'>{blog.title}</h5>
                        </div>
                    </div>
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