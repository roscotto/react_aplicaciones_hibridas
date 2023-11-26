import { useState, useEffect } from "react"
import GamesView from "./GamesView"


function GamesList({ }) {
    const [games, setGames] = useState([]) // estado inicial vacio
    const [game_id, setGameId] = useState(0) // estado inicial vacio

    useEffect(() => {
        fetch('http://localhost:2222/games')
            .then(response => response.json())
            .then(data => {
                setGames(data) // fuerzo el renderizado
            })
    }, []) // [] para que se ejecute una sola vez, cuando se monta el componente

    return (
        <>
            <h3>Listado de juegos</h3>
            <div>
                <ul>
                    {
                        games.map((game) => (
                            <li onClick={() => setGameId(game._id)} key={game._id}>
                                {game.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <GamesView game_id={game_id} />
            </div>
        </>
    )
}

export default GamesList;