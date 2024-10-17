import React from 'react';
import { useParams } from 'react-router-dom';
import Markdown from "react-markdown";

const OpenPost = ({ data }) => {
  const { id } = useParams();
  const post = data.find(item => item.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className='newp'>
      <div className="content">
      <h1 className='title'>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.time}</p>
      <Markdown className='markdown-preview'>{post.blog}</Markdown>
      </div>
    </div>
  );
};

export default OpenPost;
