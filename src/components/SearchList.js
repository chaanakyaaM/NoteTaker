import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Markdown from 'react-markdown';
import Postlist from './Postlist';
import Cancel from '../assets/cancel.png'
import Editimg from '../assets/edit.png';
// import {delclickHandler,editHandler,handleReadMore} from './Post';

function SearchList({data}) {
    const { searchval } = useParams();
    const location = useLocation();
    const useQuery = () => {
        return new URLSearchParams(location.search);
      };
    const query = useQuery();
    const searchQuery = query.get('query');
    const filteredData = data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    // alert(JSON.stringify(filteredData))

  return (
    <Postlist>
         {filteredData.length > 0 ? (
        filteredData.map(post => (
            <> 
            <div className="post">

            <h1 className='title'>{post.title}</h1>
            <p className="date">{post.date}</p>
            <p className="time">{post.time}</p>
            {post.choice ? <Markdown className='markdown-preview'>{post.blog}</Markdown> : <pre>{post.blog}</pre>}
            <button className='readmore' onClick={()=>{}}>Read More</button>
          <div className="delandedit">
            <button className="del" onClick={()=>{}}>
              <img src={Cancel} alt="Cancel" />
            </button>
            <button className="edit" onClick={() => {}}>
              <img src={Editimg} alt="" />
            </button>
            </div>
            </div>
            </>
        ))
      ) : (
        <p>No results found.</p>
      )}
        <p>{searchval}</p>
    </Postlist>
  )
}

export default SearchList