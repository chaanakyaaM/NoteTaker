import Post from './Post';
import React from 'react'
import Postlist from './Postlist';
import { useLocation } from 'react-router-dom';

function SearchList({data,setdata}) {

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
            <Post 
              key={post.id} 
              title={post.title} 
              blog={post.blog} 
              data={data} 
              setdata={setdata} 
              date={post.date} 
              time={post.time} 
              id={post.id} 
              choice
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </Postlist>
    );
}

export default SearchList;