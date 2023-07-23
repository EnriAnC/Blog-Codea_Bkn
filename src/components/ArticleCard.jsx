import React, { memo, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

const Card = ({articulo}) => {

    let { id, title, description, img, author, date, tags, likes, comments } = articulo;

    const navigate = useNavigate();
    
    const handleCardClick = (ev) => {
        if (!document.startViewTransition) return;
        ev.preventDefault();
    
        document.startViewTransition(() => {
            flushSync(() => {
                navigate(`articulo/${id}`, {state:{id}});
            });
        });
    } 

    return (
        <Link
            className="nav-link active" 
            to={`articulo/${id}`}
            onClick={handleCardClick}>
            <div id={`blog_${id}`} className="card p-0 " style={{cursor: "pointer", height:"400px", width:"100%"}}>
                <img src={img} 
                    className="img-articulo-size card-img-top" alt={img} 
                    style={{
                        viewTransitionName: `blog-${id}`,
                    }}/>

                <h5 className='card-title px-3 pt-2' 
                style={{viewTransitionName:`title-${id}`}}>
                    {title}
                </h5>
                <div className="card-body">
                    <p className="card-text fs-6 truncated-text d-inline"
                        style={{
                            viewTransitionName: `body-${id}`,
                        }}>
                            {description.length > 100 ? description.slice(0, 100)+'...' : description}</p>
                    
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <span style={{fontSize:".75rem"}}>{author}</span> <span style={{fontSize:".75rem"}}>{date}</span>
                </div>
            </div>
        </Link>
        

    )
}

export default memo(Card)