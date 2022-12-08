import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledInput = styled.input`
    background-color: blue;
    color: red;
`;


const Pokemones = () => {
    /* const [pokemon, setPokemon] = useState("") */
    const [Poke, setPoke] = useState()
    const [Img, setImg] = useState()
    /* const [data, setData] = useState([]) */
    const input = useRef(); 
    console.log(Poke)
    console.log(Img)
/*     useEffect(() => {
      
      axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results)})
      .catch(err => console.log(err) )
      
    }, [setData]) */



    const handleData = () => {
        const pokemon = input.current.value
        /* console.log(input.current.value) */
        if (pokemon === "") return;
        /* setPokemon(pokemon) */
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => {console.log(res); setPoke(res.data.name); setImg(res.data.sprites.front_default)}) 
        .catch(err => console.log(err) )
        
        input.current.value = null

    }


/*       const pokemon = data.map(poke => axios.get(poke.url))
      .then(res => console.log(res.data)
      .catch(err => console.log(err))) */

    return (
        
      <>
        <h1>POKEMONES</h1>
        
        {/* <div>
          {data.map(poke => (
            <div key={poke.id}> 
              <h2 >{poke.name}</h2>
              
            </div>
            
          ))}

        
        </div> */}

        <StyledInput ref={input} type="text" />
        <button onClick={handleData}>Buscar</button>
        <div>
            <h2>{Poke}</h2>
        </div>
        <div>
            <img src={Img} alt="" />
        </div>
        
        
      </>
    );
  };
  
  export default Pokemones;