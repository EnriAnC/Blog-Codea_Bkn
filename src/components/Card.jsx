import React from 'react'

const Card = ({articulo}) => {

    let { id, title, decription, img, author, date, tags, likes, comments } = articulo;

    img = undefined
    
    return (

        <div className="card p-0 " style={{cursor: "pointer", height:"400px", width:"100%"}}>
            <img src={img ? img : "/bg-x.png"} 
                className="img-articulo-size card-img-top object-fit-cover" alt={img} 
                style={{
                    viewTransitionName: `blog-${id}`,
                }}/>

            <h5 className='card-title px-3 py-2' style={{viewTransitionName:`title-${id}`}}>{title}</h5>
            <div className="card-body">
                <p className="card-text">{decription}</p>
                <span>{author}</span> <span>{date}</span>
            </div>
        </div>

    )
}

export default Card