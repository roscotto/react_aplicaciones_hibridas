import { useState, useEffect } from "react"



function GamesList({})
{
    const [games, setGames] = useState([]) // estado inicial vacio

    useEffect(() => {
    fetch('http://localhost:2222/games')
        .then(response => response.json())
        .then(data => {
           setGames(data) // fuerzo el renderizado
        })
    } , []) // [] para que se ejecute una sola vez
    return (
        <>
            <h3>Listado de juegos</h3>
            <ul>
                {
                    games.map((game) => <li key={game._id}>{game.name}</li>)
                }
            </ul>
        </>
    )
}

export default GamesList;