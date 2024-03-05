import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlanetsInfo = () => {

    const [planetInfo, setPlanetInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const {planetid} = useParams(); //This allows us to take parameters fromn the route
    const planetidString = planetid.toString();

    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/planets/${planetidString}` ).
        then((response)=> {
            return response.json()
        })
        .then(data => {
            setPlanetInfo(data.result.properties);
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
                <div className="col-3">
                   <h1>{planetInfo.name}</h1>
                   <img 
                 src={`https://starwars-visualguide.com/assets/img/planets/${planetidString}.jpg`}
                 alt="..."  
                 onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'}
                 style={{height: "20vw" }}
                    />
                </div>
                <div className="col-3">
                    <div className="my-5">
                        <h4>Diameter: {planetInfo.diameter}</h4>
                        <h4>Day duration: {planetInfo.rotation_period} hours </h4>
                        <h4>Year duration: {planetInfo.orbital_period} days</h4>
                        <h4>Gravity: {planetInfo.gravity} standard </h4>
                        <h4>Population: {planetInfo.population}</h4>
                        <h4>Climate: {planetInfo.climate}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanetsInfo; 