import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Trouver le film correspondant à l'id dans l'URL
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => navigate("/")}>← Retour à l'accueil</button>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ marginTop: 20 }}
      ></iframe>
    </div>
  );
};

export default MovieDetail;
