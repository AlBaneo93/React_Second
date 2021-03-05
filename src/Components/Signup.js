import React, {useState} from 'react'
import {useHistory} from "react-router";
import http from '../Utils/http'


const SignUp = () => {
    const [user, setUser] = useState({email: '', password: ''})
    const history = useHistory()

    const formHandler = (e) => {
        e.preventDefault();

        http.post("/signup")
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            });

        history.push('/')
    }

    const inputHandler = (e) => {
        e.preventDefault();
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        )
    }


    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" name="id" onChange={inputHandler} placeholder='ID'/>
                <input type="text" name="password" onChange={inputHandler} placeholder='PassWord'/>
                <button>
                    <a href="/"/>
                </button>
                <input type="submit" value="로그인"/>
            </form>
        </div>
    )
}

export default SignUp