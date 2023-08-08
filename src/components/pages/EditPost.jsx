import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../PostForm/PostForm.scss";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    picture: "",
    message: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5000/post/${id}`);
        if (response.ok) {
          const data = await response.json();
          setForm(data);
        } else {
          console.error("Retour du serveur : ", response.status);
          navigate("/notFound");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [id, navigate]);

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.title === "" || form.picture === "" || form.message === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const updatedPost = { ...form };

    try {
      const response = await fetch(`http://localhost:5000/post/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });

      if (response.ok) {
        setForm({
          title: "",
          picture: "",
          message: "",
        });

        navigate("/");
      } else {
        console.error("Retour du serveur : ", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Modifier un article</h2>
      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          className="form-control"
          name="title"
          value={form.title}
          onChange={updateField}
        />
      </div>
      <div className="form-group">
        <label htmlFor="picture">Image</label>
        <input
          type="text"
          id="picture"
          className="form-control"
          name="picture"
          value={form.picture}
          onChange={updateField}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="form-control"
          cols="45"
          rows="15"
          value={form.message}
          onChange={updateField}
        ></textarea>
      </div>
      <input type="submit" value="Modifier" className="btn-primary" />
    </form>
  );
}

export default EditPost;
