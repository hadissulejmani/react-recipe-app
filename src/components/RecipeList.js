import { Link } from "react-router-dom";
import "./RecipeList.css";
import Trashcan from "../assets/trashcan.svg";
import { firestoreProject } from "../firebase/config";

function RecipeList({ recipes }) {
  const handleClick = (id) => {
    firestoreProject.collection("cooking-recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.method.substring(0, 100)}...</p>
            <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
            <img
              className="delete"
              src={Trashcan}
              alt="Trash can"
              onClick={() => handleClick(recipe.id)}
            />
          </div>
        ))}
    </div>
  );
}

export default RecipeList;
