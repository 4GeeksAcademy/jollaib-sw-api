import { useEffect, useState, useContext } from "react";
import React from "react";
import rigoImage from "../../img/star_background.jpeg";
import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {

const {store, actions} = useContext(Context);

useEffect(() => {
	console.log(store.favourites);
  }, [store.favourites]);


 return (
	<div className="px-5" style={{  }}>
		<h1>Charachters</h1>
		<div className="row container" style={{ overflowX: 'auto', maxWidth: '100vw', scrollbarWidth: '1', scrollbarColor: 'red' }}>
			<div className="col-12" >
				<div className="d-flex judtify-content align-items-center overflow-x:auto">
					{store.charachters.map((character,index)=>{
						return(	<div key={index} className="mx-5 my-3">
									<Card 
										name={character.name}
										imgUrl={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
										specificid={character.uid}
										nextPage = 'characters'
										onClick={() => {
											actions.addFav(character.name); // Pasar solo el nombre del personaje
											console.log('Favoritos' + store.favourites);
										}}
									/>
								</div>
								)		
					})}
				</div>
			</div>
		</div>
		<div className="my-5">
			<h1>Planets</h1>
		<div className="row container" style={{ overflowX: 'auto', maxWidth: '100vw', scrollbarWidth: '1', scrollbarColor: 'red' }}>
			<div className="col-12">
				<div className="d-flex judtify-content align-items-center overflow-x:auto">
				{store.planets.map((planet,index)=>{
					return(	<div key={index} className="mx-5">
								<Card 
									name={planet.name}
									imgUrl={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
									specificid = {planet.uid}
									nextPage = 'planets'
									onClick={() => {
										actions.addFav(planet.name); // Pasar solo el nombre del personaje
										console.log('Favoritos' + store.favourites);
									}}
								/>
							</div>
					)		
				})}
				</div>
			</div>
		</div>
	</div>
	<div className="my-5">
			<h1>Starships</h1>
		<div className="row container" style={{ overflowX: 'auto', maxWidth: '100vw', scrollbarWidth: '1', scrollbarColor: 'red' }}>
			<div className="col-12">
				<div className="d-flex judtify-content align-items-center overflow-x:auto">
				{store.starships.map((starship,index)=>{
    				let uid;
    				if (starship.url[starship.url.length - 3] === '/') {
    				    uid = starship.url[starship.url.length - 2];
    				} else {
    				    uid = starship.url[starship.url.length - 3] + starship.url[starship.url.length - 2];
    				}
					return(	<div key={index} className="mx-5">
								<Card 
									name={starship.name}
									imgUrl={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
									specificid={uid}
									nextPage= 'starships'
									onClick={() => {
										actions.addFav(starship.name); // Pasar solo el nombre del personaje
										console.log('Favoritos' + store.favourites);
									}}
								/>
							</div>
					)		
				})}
				</div>
			</div>
		</div>
	</div>
</div>
)};
