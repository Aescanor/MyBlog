import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeletePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce post ?");

      if (confirmDelete && !isDeleted) {
        try {
          const response = await fetch(`http://localhost:5000/post/${id}`, {
            method: "DELETE",
          });

          if (response.ok) {
            setIsDeleted(true);
            navigate("/");
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        navigate("/");
      }
    }

    fetchData();
  }, [id, isDeleted, navigate]);

  return null;
}

export default DeletePost;
