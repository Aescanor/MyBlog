import React, { useEffect, useState } from 'react';
import PostList from '../PostList/PostList';
import './Home.scss';

export function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/post');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des articles');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Liste des articles :</h2>
      {posts.length ? (
        <PostList posts={posts} />
      ) : (
        <p>Il n'y a pas encore d'articles !</p>
      )}
    </div>
  );
}
