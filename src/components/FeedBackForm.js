import  React, { useState } from "react"

export default function FeedBackForm(){


    const [feedBack,setFeedBack] = useState({
        
        name:"",
        email:"",
        comment:"",
        rating:"mediocre",
        isFrendly:true
    })

    const handelChange = (event) => {
        const{type,name,value,checked} = event.target

        setFeedBack(prevFeedBack => ({
            ...prevFeedBack,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    


    return (
        <form className="feedback-form">
            <div className="feedback-text-container">
            <input
            className="feedback-text-input"
            placeholder="name"
            type="text"
            value={feedBack.name}
            name="name"
            onChange={handelChange}
            />
            <input
            className="feedback-text-input"
           placeholder="email"
            type="email"
            value={feedBack.email}
            name="email"
            onChange={handelChange}
            />
            <textarea 
            placeholder="...comment"
            className="feedback-textarea"
            value={feedBack.comment}
            name="comment"
            onChange={handelChange}
            />
                 <input
            type="checkbox"
            id="isFrendly"
            checked={feedBack.isFrendly}
            onChange={handelChange}
            name="isFrendly"
            />
            <label htmlFor="isFrendly">overall happy with the experience? </label>

            </div>
            <fieldset className="radio-container">

                <h4>feel free to  give feedback on this magical web application</h4>

                <label htmlFor="bad">this was a bad web application</label>
                <input 
                type="radio"
                id="bad"
                name="rating"
                value="bad"
                checked={feedBack.rating === "bad"}
                onChange={handelChange}
                />
               
               <label htmlFor="mediocre">i don't know what i feel about this web application</label>
                <input 
                type="radio"
                id ="mediocre"
                name="rating"
                value="mediocre"
                checked={feedBack.rating === "mediocre"}
                onChange={handelChange}
                />

                <label htmlFor="good">this was a good web application</label>

                <input 
                type="radio"
                id="good"
                name="rating"
                value="good"
                checked={feedBack.rating === "good"}
                onChange={handelChange}
                />

            </fieldset>

        </form>
    )
}