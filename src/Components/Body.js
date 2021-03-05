import React, {useState} from "react";
import {Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";

const Body = ({userStateHandler}) => {

    return (
        <div>
            <Route path="/" exact render={() => <Home/>}/>
            <Route path="/login" exact render={() => <Login loginUserHandler={userStateHandler}/>}/>
            <Route path="/about" exact
                   render={() => <About/>}
            />
        </div>
    )
}

export default Body;