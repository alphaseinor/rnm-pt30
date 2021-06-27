import React from 'react'
import styled from 'styled-components'

const Character = (props) => {
    console.log(props)

    const character = props.character;

    const Article = styled.article`
        width: 300px;
        padding: 1rem;
        background-color: cornsilk;
        border-radius: 1rem;
        border: 1px dotted black;
    `;

    const Image = styled.image`
        border-radius: 50%;
    `;
    
    return (
        <Article >
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.name} is a {character.gender} {character.species} who is {character.status}</p>
        </Article>
    )
}

export default Character