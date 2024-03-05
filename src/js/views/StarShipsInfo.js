import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const StarShipsInfo = () => {

    const [starShipInfo, setStarShipInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const {starShipid} = useParams(); //This allows us to take parameters fromn the route
    const starShipidNumber = Number(starShipid);

    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/starships/${starShipidNumber}` ).
        then((response)=> {
            return response.json()
        })
        .then(data => {
            setStarShipInfo(data.result.properties);
            setLoading(false); // Marcar la carga como completada cuando se recibe la respuesta
        }).
        catch((err)=>{return err})
    },[])

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="mx-4 container-fluid">
            <div className="row">
                <div className="col-4">
                   <h1>{starShipInfo.name}</h1>
                   <img 
                 src={`https://starwars-visualguide.com/assets/img/starships/${starShipid}.jpg`}
                 alt="..."  
                 onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'}
                 style={{height: "20vw" }}
                    />
                </div>
                <div className="col-2">
                    <div className="my-5">
                        <h4>Manufacturer: {starShipInfo.manufacturer}</h4>
                        <h4>Length: {starShipInfo.length} m</h4>
                        <h4>Passengers: {starShipInfo.passengers}</h4>
                        <h4>Crew needed: {starShipInfo.crew}</h4>
                        <h4>Class: {starShipInfo.class}</h4>
                        <h4>Max Atmosphering Speed (MAS): {starShipInfo.max_atmosphering_speed} Km/h</h4>
                        <h4>Consumables: {starShipInfo.consumables}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StarShipsInfo; 