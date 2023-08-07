import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  // fetch avec l'id
  const fetchPost = async () => {
    try {
      const response = await fetch(`http://localhost:5000/post/${id}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération de l\'article');
      }
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if(!post) {
    return <div>Chargement...</div> //ajoute un loader
  }


  return (
    <div>
      <h2>Article {id}</h2>
      <p>Contenu de l'article {id}</p>
    </div>
  );
}

