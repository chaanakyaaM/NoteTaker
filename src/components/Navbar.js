import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar({ logo, add, setadd, len }) {
  const navigate = useNavigate()
  function clickHandler() {
    setadd(!add);
  }
  const [searchval, setsearchval] = useState('')
  const searchHandler = () => {
    if(searchval.length>1){
      navigate(`/search?query=${encodeURIComponent(searchval)}`);
    }
    else if (searchval.length===0){
      navigate('/');
    }
}

  return (
    <div className="navbar">
      <NavLink to="/">
        <div className="logo">{logo}</div>
      </NavLink>
      <div className="searchfield">

      <input type="text" className='search' placeholder='Search' onChange={(e)=>setsearchval(e.target.value)} value={searchval} onKeyDown={(e) => e.key === 'Enter' && searchHandler()} />
      <button className="search-btn" onClick={searchHandler}>

      <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-512.png" alt="" className="search-img" />
      </button>
      </div>
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
