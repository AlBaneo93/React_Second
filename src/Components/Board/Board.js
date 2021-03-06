import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Reply from "./Reply";

// 각 보드 객체
// 타이틀, 작성자, 작성일, 본문, 댓글 ( 댓글은 따로 컴포넌트로)
const Board = ({board}) => {
  const history = useHistory()
  const [replies, setReplies] = useState([...board.reply])
  const replyHandler = (replies) => {
    setReplies([
                 ...board.reply,
                 replies
               ])
  }

  const clearFunction = () => {
  }

  return (
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
  )
}

export default Board
