import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';


const Home = () => {


    const [postsData, setPostsData] = useState(() => {
        const storedPosts = localStorage.getItem('postsData');
        return JSON.parse(storedPosts);
    });

    useEffect(() => {
        localStorage.setItem('postsData', JSON.stringify(postsData));
    }, [postsData]);

    const [addBlog, setAddBlog] = useState(false);

    return (
        <div>
            <Navbar logo='NoteTaker' add={addBlog} setadd={setAddBlog} len={postsData.length} />
                <div className="postlist">
                {postsData.map((item, index) => (
                    <Post 
                    title={item.title} 
                    blog={item.blog} 
                    date={item.date} 
                    time={item.time} 
                    key={index} 
                    data={postsData} 
                    setdata={setPostsData} 
                    id={item.id}
                    choice={item.choice}
                    />
                ))}
                </div>
        </div>
    );
};

export default Home;
