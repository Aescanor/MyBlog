import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Premier article', content: 'Contenu du premier article' },
  { id: 2, title: 'Deuxième article', content: 'Contenu du deuxième article' },
  // Ajoutez d'autres articles ici
];

function PostList() {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
