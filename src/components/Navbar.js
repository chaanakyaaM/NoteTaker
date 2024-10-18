import React,{useState} from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ logo, add, setadd, len }) {
  function clickHandler() {
    setadd(!add);
  }
  const [searchval, setsearchval] = useState('')
  

  return (
    <div className="navbar">
      <NavLink to="/">
        <div className="logo">{logo}</div>
      </NavLink>
      <input type="text" className='search' placeholder='Search' onChange={(e)=>setsearchval(e.target.val)} value={searchval} />
      <div className="links">
        <NavLink to="/">
          <button className="buttons">Home</button>
        </NavLink>
        <NavLink to="/add">
          <button className="buttons" onClick={clickHandler}>
            Create Blog
          </button>
        </NavLink>
        {/* <NavLink to="/about">
          <button className="buttons">About</button>
        </NavLink> */}
        <div className="len">Total Posts: {len}</div>
      </div>
    </div>
  );
}
