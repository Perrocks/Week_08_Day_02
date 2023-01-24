import React, { useState, useEffect } from 'react';
import CharacterSelect from '../components/CharacterSelect';
import CharacterDetail from '../components/CharacterDetail';
import './MainContainer.css';

const MainContainer = () => {

    const [ characters, setCharacters ] = useState( [] )
    const [ selectedCharacter, setSelectedCharacter ] = useState( null )
    const [ episodes, setEpisodes] = useState([])

    useEffect( () => {
        fetch( 'https://rickandmortyapi.com/api/character/' )
            .then( res => res.json() )
            .then( data => setCharacters( data.results ) )
    }, [] )

    const handleSelectChange = ( character ) => {
        setSelectedCharacter( character );
        // get episode list
        const mappedEpisodes = character.episode.map((episodeUrl) => {
            return fetch(episodeUrl)
            .then(res => res.json())
        })
        // console.log(mappedEpisodes)
        Promise.all(mappedEpisodes)
                // log name of each
            .then(episodes => {
                episodes.forEach(episode => console.log(episode.name))
                setEpisodes(episodes)
            })
    }

    return (
        <div>
            <h1>Characters</h1>
            <CharacterSelect characters={ characters } handleSelectChange={ handleSelectChange } />
            { selectedCharacter ? <CharacterDetail character={ selectedCharacter } episodes={episodes}/> : null }
        </div>
    )
}

export default MainContainer
