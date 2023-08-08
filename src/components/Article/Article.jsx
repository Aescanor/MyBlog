import PropTypes from 'prop-types';
import './Article.scss';
import FormattedDate from '../FormattedDate';
import SVGs from '../Svgs';

export function Article({post}){
      
  return (
    <div className="post-detail">
        <h2>{post.title}</h2>
        <figure>
        <img src={post.picture} alt={post.title} />
        <figcaption>{post.title}</figcaption>
        </figure>
        <div className="content">
        <p>{post.message}</p>
        </div>
        <div className="infos">
        <p> <strong>Date de publication:</strong> <FormattedDate date={post.createdAt}/></p>
        <p><strong>Auteur:</strong> {post.author}</p>
        </div>
        <div className="likes">
        <img src={SVGs.LikeIcon} alt="like icon"/>
        <p>{post.likers.length}</p>

        {/* futures fonctionnalités : */}
        {/* use UseParams to by pas by url the id of the post to delete or edit */}
        <button className='delete-button'>Supprimer</button>
        <button className='edit-button'>Modifier</button>

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