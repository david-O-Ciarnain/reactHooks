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
    const {name,value} = event.target

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
            <div className="meme-form">
            <input
            className="meme-form-input" 
            type="text"
            placeholder="top text" 
            name="topText"
            value={topText}
            onChange={handelChange}
            />
            <input
            className="meme.form-input" 
            type="text"
            placeholder="bottom text"
            name="bottomText"
            value={bottomText}
            onChange= {handelChange}
            />
            <button 
            className="meme-form-image-button"
            onClick={getRanomImage}
            >
                press for new images 
            </button >
            </div>
            <div className="meme-image-container">
            <img 
            className="meme-image"
            src={randomImageUrl}
            alt="random meme"
            />
            <p className="meme-text top">{topText}</p>
            <p className="meme-text bottom">{bottomText}</p>
            </div>
        </div>
    )
   
    
}

//fetch api "https://api.imgflip.com/get_memes"