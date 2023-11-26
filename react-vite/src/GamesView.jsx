import { useEffect, useState } from "react";


function GamesView({game_id})
{
    const [game, setGame] = useState({}) // estado inicial vacio
    useEffect(() => {
        fetch(`http://localhost:2222/games/${game_id}`)
            .then(response => response.json())
            .then((data)=> {
                setGame(data) // fuerzo el renderizado
            })
            }, [game_id]) 
        

    return (
        <div>
            <p>{game_id}</p>
            <p>{game.name}</p>
        </div>
    );
}

export default GamesView;