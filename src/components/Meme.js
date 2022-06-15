import React, { useEffect, useState } from "react"


export default function Meme(){

    const[memes,setMemes] = useState({
        topText:"",
        bottomText:"",
        randomImageUrl:"http://i.imgflip.com/1bij.jpg" 
    })

    const[allMemesApi,setAllMemesApi] = useState([])

    useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(apiData => setAllMemesApi(apiData.data.memes))
    },[])

   const handelChange = (event) => {
    const {name,value,type} = event.target

    setMemes(prevMeme => ({
        ...prevMeme,
        [name]:value
    }))
   }
    const getRanomImage =() =>{
        
        const randomNumber = Math.floor(Math.random() * allMemesApi.length)
        const url = allMemesApi[randomNumber].url

        setMemes(prevMeme => ({
            ...prevMeme,
            randomImageUrl:url
        }))
    }


    const {topText,bottomText,randomImageUrl} = memes
    return (
        <div>
            <div>
            <input
            type="text"
            placeholder="top text" 
            name="topText"
            value={topText}
            onChange={handelChange}
            />
            <input 
            type="text"
            placeholder="bottom text"
            name="bottomText"
            value={bottomText}
            onChange= {handelChange}
            />
            <button
            onClick={getRanomImage}
            >
                press for new images 
            </button>
            </div>
            <img 
            src={randomImageUrl}
            alt="random meme"
            />
            <p>{topText}</p>
            <p>{bottomText}</p>
        </div>
    )
   
    
}

//fetch api "https://api.imgflip.com/get_memes"