import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Pagenation from "./Pagenation";
import http from "../../Utils/http";

/*
* 게시판 리스트를 보여주는 컴포넌트
* */
const BoardList = () => {

    const history = useHistory()
    const [boardList, setBoardList] = useState([])

    const getBoardList = () => {
        http.get('/api/boards')
            .then(data => {
                setBoardList(data.result)
            })
            .catch(err => console.log(err))
    }

    const boardClickHandler = (e) => {
        e.preventDefault()
        console.log(e.target.bd)
        history.push({
            pathname: "/write/" + false,
            state: {'board': e.target.bd}
        })
    }

    const boardWriteHandle = (writeContent) => {
        http.post("/board", writeContent)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    /* useEffect를 통해
     * 클래스 컴포넌트의 componentDidMount, componentDidUpdate, componentWillMount역할을 할 수 있다.
     * */
    useEffect(() => {
        getBoardList()
        // boardList 변수가 변경될 때 re-render
    }, [boardList])

    return (
        <div>
            <div>
                <button onClick={() => {
                    history.push({
                        pathname: '/write', state: {
                            // history 사용시 파라미터 넘기기
                            isCreate: true
                        }
                    })
                }}>
                    게시글 작성
                </button>
            </div>
            <div>
                {/*  Boards */
                    boardList.map(bd => (
                        <li onClick={boardClickHandler} bid={bd.id} bd={bd}>{bd.title}</li>
                    ))
                }
            </div>
            <div>
                <Pagenation/>
            </div>
        </div>
    )
}

export default BoardList
