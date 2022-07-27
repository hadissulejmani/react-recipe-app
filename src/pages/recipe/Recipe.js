import "./Recipe.css";
import { useEffect, useState } from "react";
import { firestoreProject } from "../../firebase/config";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

function Recipe() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);
    firestoreProject
      .collection("cooking-recipes")
      .get()
      .then((snapshot) => {
        const recipe = snapshot.docs
          .map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
          .find((recipe) => recipe.id === id);
        setData(recipe);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, [id]);

  console.log(data);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="recipe">
          <h3 className="page-title">{data.title}</h3>
          <p>Takes {data.cookingTime} to cook.</p>
          <p>Ingredients:</p>
          <ul>
            {data.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
