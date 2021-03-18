import React, {useState} from 'react'
import Modal from "./Modal";


const ModalParent = () => {
    // 모달 컨트롤을 위한 bool 변수
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const googleLogin = ()=>{
        let obj = window.open('https://accounts.google.com/o/oauth2/auth?client_id=61528740066-savt6auv1dqdqkcp6pdk7trt331g82rq.apps.googleusercontent.com&redirect_uri=http://localhost:8080/oauth/callback&response_type=code&scope=email')
        console.log(obj.document)
    }

    return (
        <div>
            <button onClick={googleLogin}>구글 로그인</button>
            {/*<Modal open={modalOpen} close={closeModal} header="Modal Header"/>*/}
        </div>
    )
}

export default ModalParent