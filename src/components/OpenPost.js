import React from 'react';
import { useParams } from 'react-router-dom';
import Markdown from "react-markdown";
import { useNavigate } from 'react-router-dom';

const OpenPost = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = data.find(item => item.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  function backclickhandler(){
    navigate(-1)
  }

  return (
    <div className='open-post'>
      <button className='back' onClick={backclickhandler}>Back</button>
      <div className="content">
      <h1 className='title'>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.time}</p>
      {post.choice ? <Markdown className='markdown-preview'>{post.blog}</Markdown> : <pre>{post.blog}</pre>}
      
      </div>
    </div>
  );
};

export default OpenPost;
