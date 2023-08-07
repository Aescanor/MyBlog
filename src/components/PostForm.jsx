import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function PostForm() { //composant pour le formulaire de création d'un article

  const [form, setForm] = useState({ //création d'un objet form avec les champs du formulaire

    title: "",
    picture: "",
    message: "",
    author : "",
  });

  const navigate = useNavigate(); //hook pour la navigation

function updateField(e){ //fonction pour mettre à jour les champs du formulaire
  setForm({ //mise à jour de l'objet form
    ...form, //copie de l'objet form
    [e.target.name]: e.target.value //récupère la valeur de l'input et la stocke dans l'objet form
  });
}

async function handleSubmit(e){  //fonction asynchrone pour envoyer le formulaire

  e.preventDefault(); //empêche le rechargement de la page

const post =  //création d'un objet JS
  {...form}; //copie de l'objet form

  try {
    await fetch("http://localhost:5000/post", {
      method: "POST", // méthode POST pour créer un nouvel article
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post), //conversion de l'objet JS en JSON
    });

    setForm({ //remise à zéro du formulaire
      title: "",
      picture: "",
      message: "",
      author : "",
    });
    
    navigate("/"); // redirection vers la page d'accueil après succès de la création de l'article
  } catch (error) {
    console.error(error);
    // Gérer l'erreur ici, par exemple, afficher un message à l'utilisateur pour lui indiquer que la création a échoué.
  }
}


  return (
    <>
      <h2>Poster un nouvel article</h2>
      <form onSubmit={handleSubmit}>

    <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input 
        type="text" 
        id="title" 
        className="form-control" 
        name="title" 
        placeholder='Titre de l article ici'
        value={form.title} //valeur du champ du formulaire
        onChange={(e) => updateField(e)} //appel de la fonction updateField
        />
    </div>

    <div className="form-group">
        <label htmlFor="picture">Image</label>
        <input 
        type="text" 
        id="picture" 
        className="form-control" 
        name="picture"
        placeholder="URL de l 'image ici"
        value={form.picture} 
        onChange={(e) => updateField(e)}        />
    </div>

    <div className="form-group">
        <label htmlFor="message">message</label>
        <textarea name="message" 
        id="message" 
        className="form-control" 
        cols="45" rows="15"
        placeholder='Votre message ici'
        value={form.message} 
        onChange={(e) => updateField(e)}        >
        </textarea>
    </div>

    <div className="form-group">
        <label htmlFor="author">Auteur</label>
        <input 
        type="text" 
        id="author" 
        className="form-control" 
        name="author"
        placeholder='Votre nom ici'
        value={form.author} 
        onChange={(e) => updateField(e)}
        />
    </div>

<input type="submit" value="Envoyer" className="btn btn-primary"/>
      </form>
    </>
  )
}

export default PostForm;