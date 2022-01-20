import React, { useState } from 'react'
import axios from 'axios'

const Giphy = () => {
    
    const [gifURL, setGifURL] = useState('');


    const handleClick = () => {

        axios.get('https://api.giphy.com/v1/gifs/random?api_key=bhjTu6l5hxEEJkzwqsfarzGbMA6SCFBG&tag=&rating=g')
            .then(res => setGifURL(res.data.data.images.original.url))
            .catch(err => console.log(err))
    }


    //setData(res.data.data.image.original.mp4))

    return (

        <div className="container">
            <div className="App-header">
                <h1>Here's a Gif</h1>

                {/* On Button click make an API call and retrieve/render a single random GIF */}
                <button onClick={handleClick}>Gif Generator</button>
                {
                gifURL && <img src={gifURL} alt="random gif" />
                }
            </div>
        </div>
    );
}


export default Giphy;
