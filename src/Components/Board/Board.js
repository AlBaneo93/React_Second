import React, {useState} from 'react'
import {useHistory} from "react-router";
import Reply from "./Reply";

// 각 보드 객체
// 타이틀, 작성자, 작성일, 본문, 댓글 ( 댓글은 따로 컴포넌트로)
const Board = ({board, match, boardWriteHandle}) => {

  const [write, setWrite] = useState({})
  const [replies, setReplies] = useState([...board.reply])
  // router의 link를 통해 넘긴 변수
  const {iscreate} = match.params
  const replyHandler = (replies) => {
    setReplies([
                 ...board.reply,
                 replies
               ])
  }

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
        match.params.iscreate ?
          <div>
            <div>
              <div>{board.title}</div>
              <div>{board.writer}</div>
              <div>{board.date}</div>
            </div>
            <div>
              <textarea>{board.content}</textarea>
            </div>
            <Reply reply={replies} replyHandler={replyHandler} />
          </div>
          :
          <div>
            <div>
              <textarea onChange={textChangeHandler} />
            </div>
            <div>
              <button onClick={boardWriteCancle}>취소</button>
              <button onClick={boardWriteSubmit}>등록</button>
            </div>
          </div>
      }
    </div>
  )
}

export default Board
