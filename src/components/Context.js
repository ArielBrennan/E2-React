import React from 'react'
import { createContext } from 'react'
import axios from 'axios';


const handleSubmit = async (e, pokemon) => {
    e.preventDefault() /* PORQUE ES UN SUBMIT, PARA QUE NO SE RECARGA LA PAGINA */
}

export const Context = createContext();

export const ContextProvider = ({children}) => {
    
    return (
    <Context.Provider value={{titulo: 'ToDo list'}}>
    
    {children}
    
    
    
    </Context.Provider>
    )
}