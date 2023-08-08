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
