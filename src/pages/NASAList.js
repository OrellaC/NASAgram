import React, { useState } from 'react'
import NASAData from '../Components/NASAData'
import axios from 'axios'


const NASAlist = () => {

    // function declaration 

    //function expressions "const app = () =>"
    //functional components are considered stateless 
    //class components are considered stateful 

    //write state toward the very top of your component
    //1.) import useState at the top of your code 
    //2.) First argument = the name of your state 
    //3.) Second argument = your method to update your state
    // EXAMPLE --- const[state, setState] = useState(initialState)

    const [like, setLike] = useState(['unliked'])
    const [userInput, setUserInput] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    //In functional components we no longer have to use the keyword "this". You just call it {name of state }

    // const toggle = () => {
    //     console.log('toggling')

    //     //this is a ternary function 
    //     // data === 'unliked' ? setData('liked') : setData('unliked')

    //     // regular if/else statement 
    //     if (like === 'unliked') {
    //         setLike('liked')
    //     } else {
    //         setLike('unliked')
    //     }
    // }

    const handleChange = (e) => {
        // console.log('handling change', e.target.value)
        setUserInput(e.target.value)
    }

    const handleSubmit = e => {
        //any AJAX calls/HTTP REQUEST using axios/fetch wil return a Promise => response 
        e.preventDefault()
        console.log('submitting')
        axios.get(`https://images-api.nasa.gov/search?q=${userInput}`)
            //whenever we get a response back, only then will then() run 
            //We no longer need to use json()
            .then(response => setData(response.data.collection.items))
            // .then(data => this.setState({userInput: data}))
            .catch(err => console.error(err))

    }

    return (
        <div className="App">
            <h1>NASAgram</h1>
            {/* {console.log('state', data)} */}
            {/* CONTROLLED FORM - meaning handle our change via state */}
            <form onSubmit={handleSubmit}>
                <label htmlFor='userInput'>Search: </label>
                <input
                    type='text'
                    id='userInput'
                    name='userInput'
                    onChange={handleChange}
                    value={userInput}
                />
                <input type="submit" value='submit' />
            </form>
            {/* 
      <button onClick={toggle}>{like}</button> */}

            {loading
                ?
                <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="" />
                :
                <div id='nasa-container'>
                    {
                        data.map((item) => {
                            return (
                             
                                 <NASAData key={item.data[0].nasa_id}  item={item} /> 
                              
                            )
                        })
                    }
                </div>
            }



        </div>

    );
}

export default NASAlist;
