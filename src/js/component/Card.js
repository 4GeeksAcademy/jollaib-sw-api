import React from 'react'
import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Card = (props) => {

  const handleAddToFavorites = () => {
    props.onClick(); // Pasar el nombre del personaje a la función onClick
  };

  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
        <img 
          src={props.imgUrl} 
          className="card-img-top" 
          alt="..."  
          onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'}
          style={{height: "20vw" }}
        />
            <div className="card-body" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <h5 className="card-title">{props.name}</h5>
              <div className='row'>
                <div className='col'>
                  <Link to={`${props.nextPage}/${props.specificid}`} className="btn btn-primary">
                   More info
                  </Link>
                </div>
                <div className='col'>
                  <FontAwesomeIcon onClick={handleAddToFavorites} icon={faHeart} style={{fontSize: '40px', color: 'red'}} />
                </div>
              </div>
            </div>
         </div>
  </div>
  )
}

export default Card