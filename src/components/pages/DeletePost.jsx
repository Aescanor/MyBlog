import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeletePost() {

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    async function fetchData() { 
      try {
        const response = await fetch(`http://localhost:5000/post/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          navigate("/");
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

  return null; 
}

export default DeletePost;

// check my code because i've a 404 error when i click on the delete button 