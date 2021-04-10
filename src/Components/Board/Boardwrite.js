import React, {useState} from 'react'
import {useHistory, useLocation} from "react-router";
import Reply from "./Reply";

// 각 보드 객체
// 타이틀, 작성자, 작성일, 본문, 댓글 ( 댓글은 따로 컴포넌트로)
const Boardwrite = ({board, boardWriteHandle}) => {

    const [write, setWrite] = useState({})

    // router의 link를 통해 넘긴 변수
    const location = useLocation()
    const isCreate = location.state.isCreate


    const history = useHistory()
    const boardWriteCancle = (e) => {
        e.preventDefault()
        history.push('/')
    }
    const boardWriteSubmit = (e) => {
        e.preventDefault()

        boardWriteHandle(write)
    }
    const textChangeHandler = (e) => {
        setWrite(e.target.value)
    }


    return (
        <div>

            {

                isCreate ?
                    <div>
                        <div>
                            <textarea onChange={textChangeHandler}/>
                        </div>
                        <div>
                            <button onClick={boardWriteCancle}>취소</button>
                            <button onClick={boardWriteSubmit}>등록</button>
                        </div>
                    </div>
                    :
                    <div>
                        <h2>게시글 작성</h2>
                        <div>
                            <div>{board.title}</div>
                            <div>{board.writer}</div>
                            <div>{board.date}</div>
                        </div>
                        <div>
                            <textarea>{board.content}</textarea>
                        </div>
                        {/*<Reply reply={replies} replyHandler={replyHandler}/>*/}
                    </div>
            }
        </div>
    )
}

export default Boardwrite
