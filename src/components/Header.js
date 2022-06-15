import React,{ useEffect, useState } from "react";

export default function Header (){ 
    const [dogs,setDogs] = useState([])

    useEffect(() =>{
       fetch("https://dog.ceo/api/breeds/image/random")
       .then(res => res.json()
       .then(data => setDogs(data.message))) 
        
    },[])
    
return (
    <header className="header">
        <img
        src={dogs} alt="dog"
        className="header-img"
        />
        <h3 className="left-text"> Random dogs images and meme generator</h3>
        <h3 className="right-text">Learning hooks in react</h3>

    </header>
)
}