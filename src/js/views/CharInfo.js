import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CharInfo = () => {

    const [charInfo, setCharInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const {charid} = useParams(); //This allows us to take parameters fromn the route
    const charidString = charid.toString();

    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/people/${charidString}` ).
        then((response)=> {
            return response.json()
        })
        .then(data => {
            setCharInfo(data.result.properties);
            setLoading(false); // Marcar la carga como completada cuando se recibe la respuesta
        }).
        catch((err)=>{return err})
    },[])

    console.log('hello' + charInfo.name)

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="mx-4 container-fluid">
            <div className="row">
                <div className="col-2">
                   <h1>{charInfo.name}</h1>
                   <img 
                 src={`https://starwars-visualguide.com/assets/img/characters/${charidString}.jpg`}
                 alt="..."  
                 onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'}
                 style={{height: "20vw" }}
                    />
                </div>
                <div className="col-2">
                    <div className="my-5">
                    <h4>height: {charInfo.height} cm</h4>
                    <h4>mass: {charInfo.mass} kg</h4>
                    <h4>eye color: {charInfo.eye_color}</h4>
                    <h4>skin color: {charInfo.skin_color}</h4>
                    <h4>birth year: {charInfo.birth_year}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharInfo; 