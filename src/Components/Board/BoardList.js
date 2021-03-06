import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Pagenation from "./Pagenation";

const BoardList = () => {
  const history = useHistory()
  const [clickedBoard, setClickedBoard] = useState({})
  const boardClickHandler = (e) => {
    e.preventDefault()
    
    history.push("/board", clickedBoard)
  }
  return (
    <div>
      <div>
        {/*  Boards */}
        <div onClick={boardClickHandler}></div>
      </div>
      <div>
        <Pagenation />
      </div>
    </div>
  )
}

export default BoardList
