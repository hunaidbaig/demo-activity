import { useEffect } from 'react';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';
import { useState } from 'react';

// Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
// Pass fetched posts to <BlogPost /> via props & output the posts in that component
function App() {
  const [posts, setPosts] = useState([]);
  const [saving, setSaving] = useState(false);

  const fetchTodos = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data.slice(0,5).reverse());
    console.log(data);
  }

  useEffect(()=>{
    fetchTodos();
  },[])

  return (
    <>
      <NewPost post={posts} setPosts={setPosts} setSaving={setSaving} />
      {
        saving ? 'Saving' :
        posts.map((post)=>{
          return(
            <BlogPosts key={post.id} title={post.title} blog={post.body} />
          )
        })
      }
    </>
  );
}

export default App;
