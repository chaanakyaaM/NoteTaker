
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cancel from "../cancel.png";
import Editimg from '../edit.png';
import Markdown from 'react-markdown';

export default function Post({ title, blog, data, setdata, date, time,id }) {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState(title);
  const [blogVal, setBlogVal] = useState(blog);
  const navigate = useNavigate(); 

  useEffect(() => {
    setVal(title);
    setBlogVal(blog);
  }, [title, blog]);

  function clickHandler() {
    const filteredData = data.filter(item => item.time !== time);
    setdata(filteredData);
  }

  function editHandler() {
    const updatedData = data.map(item =>
      (item.time === time && item.date === date) ? { ...item, title: val, blog: blogVal } : item
    );
    setdata(updatedData);
    setEdit(false); 
  }

  const handleReadMore = (  ) => {

    navigate(`/post/${encodeURIComponent(id)}`);
  };

  return (
    <div className="post">
      {edit ? (
        <div className="editfield">
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <textarea
            value={blogVal}
            onChange={(e) => setBlogVal(e.target.value)}
          />
          <div className="edit-buttons">
            <button onClick={editHandler} className="submit">Save</button>
            <button onClick={() => { setEdit(false); setVal(title); setBlogVal(blog); }} className="cancel">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="title">{val}</h2>
          <p className="date">{date}</p>
          <p className="time">{time}</p>
          <Markdown className='md'>{blogVal}</Markdown>
          <button className='readmore' onClick={handleReadMore}>Read More</button>
          <div className="delandedit">
            <button className="del" onClick={clickHandler}>
              <img src={Cancel} alt="Cancel" />
            </button>
            <button className="edit" onClick={() => setEdit(true)}>
              <img src={Editimg} alt="" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

