import React from 'react'

const Article = ({post, title, picture, message}) => {
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
        <img src={likeIcon} alt="like icon"/>
        <p>{post.likers.length}</p>

        </div>

    </div>
  )
}

export default Article