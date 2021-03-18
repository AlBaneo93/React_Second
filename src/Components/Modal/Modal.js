
import React, {useState} from 'react'
import http from '../../Utils/http'

const Modal = ({open}) => {
    const googleLogin = ()=>{
        let obj = window.open('https://accounts.google.com/o/oauth2/auth?client_id=61528740066-savt6auv1dqdqkcp6pdk7trt331g82rq.apps.googleusercontent.com&redirect_uri=http://localhost:8080/oauth/callback&response_type=code&scope=email')
    }
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {
                open ? (
                    <section>
                        <button onClick={googleLogin}>Login As Google</button>
                    </section>
                ): null
            }
        </div>
    )
}

export default Modal