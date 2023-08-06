import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostList() {
const [posts, setPosts] = useState([]);

useEffect(() => {

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/post');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des la liste des articles');

      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  fetchPosts();
},[])


  return (

    <div className="post-list">
      <h2>Articles</h2>
      <ul>
        {posts.map((post) => (
          <li key={nanoid()}>
            <Link to={`/post/${post.id}`}>{post.message}{post.author}{post.likers}</Link>
          </li>
        ))}
        </ul>
</div>
);
  }

export default PostList;
