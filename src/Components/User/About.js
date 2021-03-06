import React from 'react'

const About = ({user}) => {


    return (
        <div>
            <h1>
                About Page
            </h1>
            <h3>
                Hello!, {user.name} is your name
            </h3>
          <div>
            <h3>Friends List</h3>
            <div>
              {user.friends}
            </div>
          </div>
        </div>
    )
}

export default About;
