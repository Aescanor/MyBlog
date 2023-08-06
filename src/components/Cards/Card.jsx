import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ post }) {
  // Date :
  const dateObject = new Date(post.createdAt);
  const date = dateObject.toLocaleString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="card">
      <h2>
        <Link to={`/post/${post._id}`}>{post.title}</Link>
      </h2>
      <figure>
        <img
          src={post.picture}
          alt="image de l'article"
          className="img-fluid"
        />
        <figcaption>{post.title}</figcaption>
      </figure>
      <div className="content">
        <p>{post.message}</p>
      </div>
      <div className="infos">
        <p>Date de publication: {date}</p>
        <p>Auteur: {post.author}</p>
      </div>
      <p>Likes: {post.likers.length}</p>
    </div>
  );
}

export default Card;
