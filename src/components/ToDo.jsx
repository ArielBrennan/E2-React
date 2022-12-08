import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input, Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react'
import { useState } from 'react'
import { useRef } from 'react'
import { Container } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import ToDoContainer from './ToDoContainer'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Context } from './Context'



export const ToDo = () => {
    const [todo, setTodo] = useState([])
    const input = useRef();              
    const container = useRef();
    
    const {titulo} = useContext(Context)
    
    
    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('todos'))
        if (storage) {
            setTodo(storage);
        }   
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo))
    }, [todo])
    
    

    
    
console.log(localStorage)



    const handleData = () => {
        const data = input.current.value
        /* console.log(input.current.value) */
        if (data === "") return;
        setTodo([...todo, data])
        input.current.value = null
    }

    const clearData = () => {
        setTodo([])
    }


    return (
    <>

    <Navbar></Navbar>

    <Heading>{titulo}</Heading>
    <Input ref={input} onSubmit={handleData} type="text" htmlSize={32} width='auto' />
    <ButtonGroup variant='outline' spacing='6'>
        <Button onClick={handleData} colorScheme='blue'>Add</Button>
        <Button onClick={clearData} colorScheme='red'>Clear</Button>
    </ButtonGroup>
    {/* 
    <Container maxW='sm' centerContent ref={container}>{todo}</Container> */}
    <ToDoContainer todos={todo}/>
    
    
    </>
    )
}