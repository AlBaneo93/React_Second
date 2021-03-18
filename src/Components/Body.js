import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from "./Main";
import Login from "./User/Login";
import About from "./User/About";
import BoardList from "./Board/BoardList";
import NotFound from "./ErrorComponents/NotFound";
import ModalParent from "./Modal/ModalParent";

const Body = ({userStateHandler}) => {

    return (
        <div>
            <ModalParent/>
            <Switch>
                {/*home*/}
                <Route path="/" exact render={() => <Main/>}/>
                {/*login*/}
                <Route path="/login" exact render={() => <Login loginUserHandler={userStateHandler}/>}/>
                {/*board*/}
                <Route path="/board" render={() => <BoardList/>}/>
                {/*info*/}
                <Route path="/about" exact
                       render={() => <About/>}
                />
                {/*Error Page Component*/}
                <Route render={() => <NotFound/>}/>
            </Switch>
        </div>
    )
}

export default Body;
