import React from 'react';
import PropTypes from 'prop-types';
import SVGs from '../Svgs';

export function Article({post, ...props}){
      
  return (
    <div className="post">
        <h3>{post.title}</h3>
        <figure>
        <img src={post.picture} alt={post.title} />
        </figure>
        <div className="content">
        <p>{post.message}</p>
        </div>
        <div className="infos">
        <p> <strong>Date de publication:</strong> {post.createdAt}</p>
        <p><strong>Auteur:</strong> {post.author}</p>
        </div>
        <div className="likes">
        <img src={SVGs.LikeIcon} alt="like icon"/>
        <p>{post.likers.length}</p>

        </div>

    </div>
  )
}

// ProptTypes  : pour ne plus avoir d'erreur dans la console
Article.propTypes = {
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      likers: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };

export default Article