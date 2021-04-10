import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from "./Main";
import Login from "./User/Login";
import About from "./User/About";
import BoardList from "./Board/BoardList";
import NotFound from "./ErrorComponents/NotFound";
import ModalParent from "./Modal/ModalParent";
import BoardWrite from "./Board/Boardwrite";

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
                <Route path="/boardlist" render={() => <BoardList/>}/>
                {/*info*/}
                <Route path="/about" exact
                       render={() => <About/>}
                />
                {/*Board Writer Componenet*/}
                <Route path="/write" exact render={() => <BoardWrite/>}/>
                {/*Error Page Component*/}
                <Route render={() => <NotFound/>}/>
            </Switch>
        </div>
    )
}

export default Body;
