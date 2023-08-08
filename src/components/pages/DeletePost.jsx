import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeletePost() {

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce post ?"); 

    if (!confirmDelete) {
      navigate("/");
      return;
    }

    async function fetchData() { 
      try {
        const response = await fetch(`http://localhost:5000/post/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, [id, navigate]);
  
  return null; 
}

export default DeletePost;
