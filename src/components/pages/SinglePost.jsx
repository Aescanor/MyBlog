import React from 'react';
import { useParams } from 'react-router-dom';

export function SinglePost() {
  const { id } = useParams();

  // Remplacez ce code par la logique pour récupérer les détails de l'article avec l'ID spécifié

  return (
    <div>
      <h2>Article {id}</h2>
      <p>Contenu de l'article {id}</p>
    </div>
  );
}

