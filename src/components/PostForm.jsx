import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function PostForm() { //composant pour le formulaire de création d'un article

  const [form, setForm] = useState({ //création d'un objet form avec les champs du formulaire

    title: "",
    picture: "",
    message: "",
    author : "",
  });

  const useNavigate = useNavigate(); //hook pour la navigation

function updateField(e){ //fonction pour mettre à jour les champs du formulaire
  setForm({ //mise à jour de l'objet form
    ...form, //copie de l'objet form
    [e.target.name]: e.target.value //récupère la valeur de l'input et la stocke dans l'objet form
  });
}

async function handleSubmit(e){  //fonction asynchrone pour envoyer le formulaire

  e.preventDefault(); //empêche le rechargement de la page

const newPost = { //création d'un objet JS
  {...form}; //copie de l'objet form

  await fetch("http://localhost:3000/post", {  //requête vers l'API

    method: "POST", //méthode de la requête
    headers: { //headers de la requête
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost) //conversion de l'objet JS en JSON
  })
  .catch(error=> { //en cas d'erreur
    console.error(error);
    return;
  });

  setForm({ //remise à zéro du formulaire
    title: "",
    picture: "",
    message: "",
    author : "",
  });
  navigate("/") //redirection vers la page d'accueil
}


}

  return (
    <>
      <h2>Poster un nouvel article</h2>
      <form action="post">

    <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input type="text" id="title" className="form-control" name="title" />
    </div>

    <div className="form-group">
        <label htmlFor="picture">Image</label>
        <input type="text" id="picture" className="form-control" name="picture"/>
    </div>

    <div className="form-group">
        <label htmlFor="message">message</label>
        <textarea name="message" id="message" className="form-control" cols="45" rows="15"></textarea>
    </div>

    <div className="form-group">
        <label htmlFor="author">Auteur</label>
        <input type="text" id="author" className="form-control" name="author"/>
    </div>

<input type="submit" value="Envoyer" className="btn btn-primary"/>
      </form>
    </>
  )
}

export default PostForm