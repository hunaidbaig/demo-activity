import classes from './BlogPosts.module.css';

function BlogPosts({title, blog}) {
  return (
    <ul className={classes.posts}>
      <li>{title}</li>
      <li>{blog}</li>
    </ul>
  )
}

export default BlogPosts;
