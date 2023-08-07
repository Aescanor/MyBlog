import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PostForm.scss';

function PostForm() { 

  const [form, setForm] = useState({ 

    title: "",
    picture: "",
    message: "",
    author : "",
  });

  const navigate = useNavigate(); 

function updateField(e){ 
  
  setForm({ 
    ...form, 
    [e.target.name]: e.target.value 
  });
}

async function handleSubmit(e){  

  // contrôle input vide :
  if (form.title === "" || form.picture === "" || form.message === "" || form.author === "") {
    alert("Veuillez remplir tous les champs");
    return;
  }

  e.preventDefault(); 

const post =  
  {...form}; 

  try {
    await fetch("http://localhost:5000/post", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post), 
    });

    setForm({ 
      title: "",
      picture: "",
      message: "",
      author : "",
    });
  
    
    navigate("/"); 
  } catch (error) {
    console.error(error);
  }
}


  return (
    <>
      <form onSubmit={handleSubmit} className='form-container'>

      <h2 className='form-title'>Poster un nouvel article</h2>

    <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input 
        type="text" 
        id="title" 
        className="form-control" 
        name="title" 
        placeholder='Titre de l article ici'
        value={form.title} 
        onChange={(e) => updateField(e)} 
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
        onChange={(e) => updateField(e)}        
        />
    </div>

    <div className="form-group">
        <label htmlFor="message">Message</label>
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

<input type="submit" value="Envoyer" className="btn-primary"/>
      </form>
    </>
  )
}

export default PostForm;