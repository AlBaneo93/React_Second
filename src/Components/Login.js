import React, {useState} from 'react'
import http from '../Utils/http'
import {useHistory} from "react-router";


const Login = ({loginUserHandler}) => {
    const [userData, setUserData] = useState({
        email: "",
        pwd: "",
        pwdcfm: "",
        name: ""
    });
    const history = useHistory()
    const {email, pwd, pwdcfm, name} = userData;
    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }
    const onReset = () => {
        setUserData({email: "", pwd: "", pwdcfm: "", name: ""})
    }
    const LoginHandler = (e) => {
        e.preventDefault();
        if (userData.pwd !== userData.pwdcfm) {
            alert("입력하신 패스워드를 확인해주세요")
            setUserData({...userData, pwd: "", pwdcfm: ""})
            return
        }

        const tmpuser = {
            "email": userData.email,
            "password": userData.pwd,
            "name": userData.name,
        }

        http
            .post("/member", tmpuser)
            .then(res => {
                console.log("Server Response")
                console.log(res)
                console.log("Server Response")
            })
            .catch(err => {
                console.log(err)
            })


        loginUserHandler(userData)
        history.push("/")
    }
    const Style_Loginform = {
        "width": "300px",
        "margin": "auto"
    }


    const googleLogin = () => {
        http.post('/oauth2/authorization/google')
            .then(res => {
                console.log("Attempt Google Login")
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }
    const naverLogin = () => {
        http.post('/oauth2/authorization/naver')
            .then(res => {
                console.log("Attempt Naver Login")
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const kakaoLogin = () => {
        http.post('/oauth2/authorization/kakao')
            .then(res => {
                console.log("Attempt Kakao Login")
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div style={Style_Loginform}>
            <h1>Login Page</h1>
            <form onSubmit={LoginHandler}>
                <fieldset>
                    <legend>가입 정보 입력</legend>
                    <table>
                        <tbody>
                        <tr>
                            <td><label>E-Mail</label></td>
                            <td><input onChange={onChangeInput} name="email" value={email} type="text"/></td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td><input onChange={onChangeInput} name="pwd" value={pwd} type="password"/></td>
                        </tr>
                        <tr>
                            <td><label>Password Confirm</label></td>
                            <td><input onChange={onChangeInput} name="pwdcfm" value={pwdcfm} type="password"/></td>
                        </tr>
                        <tr>
                            <td><label>Name</label></td>
                            <td><input onChange={onChangeInput} name="name" value={name} type="text"/></td>
                        </tr>
                        <tr>
                            <td><input type="submit"/></td>
                            <td><input onClick={onReset} type="button" value="취소"/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={googleLogin}>구글 로그인</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={naverLogin}>카카오 로그인</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={kakaoLogin}>네이버 로그인</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
            </form>
        </div>
    );

}

export default Login;