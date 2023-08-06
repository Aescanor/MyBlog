import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from './Cards/Card';

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
      <h2>Liste des article</h2>
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
</div>
);
  }

export default PostList;
