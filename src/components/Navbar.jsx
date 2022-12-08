import React from 'react'
import { Input, Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom'


export const Navbar = () => {
    const navigate = useNavigate();

    return (
    <>
    
    <Breadcrumb separator='-'>
    <BreadcrumbItem>
        <BreadcrumbLink onClick={() => navigate("/")}>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
        <BreadcrumbLink  onClick={() => navigate("pokemones")}>Pokemones</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
        <BreadcrumbLink  onClick={() => navigate("toDo")}>toDo list</BreadcrumbLink>
    </BreadcrumbItem>
    </Breadcrumb>

    



    
    
    </>
    )
}