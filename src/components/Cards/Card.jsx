import React from 'react';
import { Link } from 'react-router-dom';

function Card({ post }) {
  return (
    <div className="card">
      <h3><Link to={`/post/${post._id}`}>{post.title}</Link></h3>
      <img src={post.picture} alt="image de l'article" />
      <p>{post.message}</p>
      <p>Auteur: {post.author}</p>
      <p>Likes: {post.likers.length}</p>
    </div>
  );
}

export default Card;
