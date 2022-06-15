import React, { useState } from "react"
import Header from "./Header"
import Meme from "./Meme"
import FeedBackForm from "./FeedBackForm"


export default function App() {

    const [showFeedBackForm, setShowFeedBackForm] = useState(false)

    const showFeedBackEvent = () =>{
        setShowFeedBackForm(prevShowFeedBack => !prevShowFeedBack )
    }

    return(
        <div>
            <Header />
            <h1>
                <Meme/> 
                <button className="show-feedback-button" onClick={showFeedBackEvent}>show feedback form</button>
                {showFeedBackForm && <FeedBackForm />}
            </h1>
        </div>

    )
}