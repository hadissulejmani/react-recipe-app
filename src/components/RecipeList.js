import { Link } from "react-router-dom";
import "./RecipeList.css";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.method.substring(0, 100)}...</p>
            <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
          </div>
        ))}
    </div>
  );
}

export default RecipeList;
