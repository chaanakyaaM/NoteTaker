import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Postlist from './components/Postlist';
import Post from './components/Post';
import Addblog from './pages/Addblog';
import { useState, useEffect } from 'react';
import About from './pages/About';
import OpenPost from './components/OpenPost';


function App() {

    const initialPosts = [
      { id:'125',title: 'Title_one', blog: 'loemEssay topiAn essay is nothing but a piece of content which is written from the perception of writer or author. Essays are similar to a story, pamphlet, thesis, etc. The best thing about Essay is you can use any type of language – formal or informal. It can biography, the autobiography of anyone. Following is a great list of 100 essay topics. We will be adding 400 more soon!', date: 'Sept 6 2024', time: '13:15' }
    ];

    const [postsData, setPostsData] = useState(() => {
      // Retrieve data from localStorage
      const storedPosts = localStorage.getItem('postsData');
      return storedPosts ? JSON.parse(storedPosts) : initialPosts;
    });
  
    useEffect(() => {
      // Store postsData in localStorage whenever it changes
      localStorage.setItem('postsData', JSON.stringify(postsData));
    }, [postsData]);

    const [addBlog, setAddBlog] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar logo='NoteTaker' add={addBlog} setadd={setAddBlog} len={postsData.length}   />
        <Routes>
          <Route 
            path="/" 
            element={
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
                  />
                ))}
              </Postlist>
            } 
          />
          <Route 
            path="/add" 
            element={<Addblog update={setPostsData} posts={postsData} add={addBlog} setadd={setAddBlog} />} 
          />
          <Route 
            path="/about" 
            element={<About/>}
          />
          <Route 
            path="/post/:id" 
            element={<OpenPost data={postsData}></OpenPost>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
