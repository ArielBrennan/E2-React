import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"  
import Layout from '../components/Layout';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import Pokemones from '../pages/Pokemones';
import ToDoPage from '../pages/ToDoPage';


function Rutas() {
  return (
    <>
<BrowserRouter>
    <Layout>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="toDo" element={ <ToDoPage/> } />
        <Route path="pokemones" element={ <Pokemones/> } />
    </Routes>
    </Layout>
</BrowserRouter>
    </>
  )
}

export default Rutas;