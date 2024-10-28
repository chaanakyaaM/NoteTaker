// Home.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Postlist from '../components/Postlist';
import Post from '../components/Post';
// import Addblog from './Addblog'; // Adjust the path as needed
// import About from './About';
// import OpenPost from '../components/OpenPost';
// import SearchList from '../components/SearchList';

const Home = () => {
    // const initialPosts = [
    //     { id: '125', title: 'Title_one', blog: 'Some content...', date: 'Sept 6 2024', time: '13:15', choice: true }
    // ];

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
            <Postlist>
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
            </Postlist>
        </div>
    );
};

export default Home;
