import React from "react";
import {Link} from "react-router-dom";

const Navigation = ({user, userLogout}) => {
  const navRightSytle = {
    width: "50%"
  }
  const navLeftSytle = {
    width: "20%"
  }

  return (
    <div>
      <div style={navLeftSytle}>
        <Link to="/">
          <button>Home</button>
        </Link>
        {
          user.name === undefined ? (<Link to="/login">
            <button>Login</button>
          </Link>) : (
            <button onClick={userLogout}>
              Logout
            </button>
          )
        }
        <Link to="/board">
          <button>Board</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      <div style={navRightSytle}>
        <span>{user.name === undefined ? '환영합니다' : user.name + " 님 환영합니다"}</span>
      </div>
    </div>
  )
}

export default Navigation;
