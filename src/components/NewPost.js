import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost({post, setPosts, setSaving}) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredBlog, setEnteredBlog] = useState('');
  const [loading, setLoading] = useState(false);
  // const [count, setCount] = useState(0);

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
  function submitHandler(event) {
    event.preventDefault();
    setLoading(true);
    setSaving(true);

    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify({
        title: enteredTitle,
        body: enteredBlog,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response=> response.json())
    .then(res=> {
      console.log(res);
      setPosts([...post, res].reverse());
      setLoading(false);
      setSaving(false);
    })
    .catch(err=> console.log(err));

    setEnteredTitle('');
    setEnteredBlog('');
  }

  const updateBlogHandler = (e)=>{
    setEnteredBlog(e.target.value);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />

        <label>Blog</label>
        <input type="text" onChange={updateBlogHandler} value={enteredBlog} />
      </div>
      <button>{loading ? 'Saving...' : 'Save'}</button>
    </form>
  );
}

export default NewPost;
