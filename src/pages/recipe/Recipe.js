import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="recipe">
          <h3>{data.title}</h3>
          <p>Ingredients:</p>
          <ul>
            {data.ingredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Recipe;
