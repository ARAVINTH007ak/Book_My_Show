import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarosel from "../components/HeroCarosel/HeroCarosel";
import { useParams } from "react-router-dom";
function DefaultLayout(props) {
    const { id } = useParams();
    
    return(
        <>
            <Navbar />
            <HeroCarosel  />
            {props.children}
        </>
    ) 
}


export default DefaultLayout;