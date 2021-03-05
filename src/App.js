import React, {useState} from 'react'
import Navigation from "./Components/Navigation";
import Body from "./Components/Body";
import http from './Utils/http'
import {useHistory} from "react-router";

const App = () => {

    const appStyle = {
        height: "100%",
        width: "100%"
    }

    const history = useHistory()
    const [user, setUser] = useState({})

    const userStateHandler = (loginUser) => {
        setUser(loginUser)
    }

    const userLogout = (e) => {
        e.preventDefault()
        http.get('/logout/' + user.email)
            .then( ()=>{
                console.log("Logout Success")
            })
            .catch(err =>{
                console.log(err)
            })

        history.push("/")

    }

    return (
        <div className="App" style={appStyle}>
            {/*<div>*/}
            <Navigation user={user}/>
            {/*</div>*/}
            {/*<div>*/}
            <Body userStateHandler={userStateHandler}/>
            {/*</div>*/}
        </div>
    );
}

export default App;
