import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from '../../img/star_wars_logo.png'
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {

	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div>
				<img src={StarWarsLogo} style={{height: '15vh', zIndex: '1000'}}/>
			</div>
			<div className="dropdown">
			  <a className="btn btn-danger dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			    Favourites {store.favourites.length}
			  </a>

			  <ul className="dropdown-menu">
				{store.favourites.map((item, index)=>{
					return (
						<div  key={index} className="row d-flex">
							<li className="col ms-1">{item}</li>
							<FontAwesomeIcon className="col me-3" onClick={()=> actions.deleteFav(item)} icon={faTrash} style={{fontSize: '20px', color: 'red'}} />
						</div>
					)
					
				})}
			  </ul>
</div>
		</nav>
	);
};
