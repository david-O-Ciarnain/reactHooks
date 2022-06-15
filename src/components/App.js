import React from "react"
import Header from "./Header"
import Meme from "./Meme"
import FeedBackForm from "./FeedBackForm"


export default function App() {

    return(
        <div>
            <Header />
            <h1>
                <Meme/> 
                <FeedBackForm /> 
            </h1>
        </div>

    )
}