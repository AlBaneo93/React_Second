import React, {useState} from 'react'

const Reply = ({replies, replyhandler}) => {
  const [reply, setReply] = useState({})

  const tmpReplies = replies.map((repl) => {
    <>
      <textarea value={repl.content} />
      <span>{repl.writer}</span>
    </>
  })

  const replyChangeHandler = (e) => {
    setReply(e.target.value)
  }

  return (
    <div>

      <div>
        <textarea placeholder="댓글을 입력해 주세요" onChange={replyChangeHandler} />
      </div>
      <div>
        <button onClick={() => replyhandler(reply)}>등록</button>
      </div>
      <div>
        {tmpReplies}
      </div>
    </div>
  )
}

export default Reply
