import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext'

const About = () => {
    const user = useContext(UserContext)

    console.log('About', user)

    user.setUser('Evan')
    return (
        <div>
            <p>
                THIS IS ABOUT PAGE
            </p>
            {
                user.user === 'David'
                ? 'HELLO DAVID'
                : 'HELLO EVAN'
            }
        </div>
    );
}

export default About;