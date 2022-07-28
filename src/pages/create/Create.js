import "./Create.css";
import { useState, useRef, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Navigate, useNavigate } from "react-router-dom";
import { firestoreProject } from "../../firebase/config";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  const postData = () => {
    firestoreProject
      .collection("cooking-recipes")
      .add({
        title,
        method,
        cookingTime,
        ingredients,
      })
      .then((docRef) => {
        setData(docRef.id);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      method,
      cookingTime: cookingTime + " minutes",
      ingredients,
    });
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Create a recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Recipe method:</span>
          <textarea
            type="text"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              ref={ingredientInput}
              required
            />
            <button onClick={handleAddIngredient}>+</button>
          </div>
          <p className="ingredients-list">
            Current ingredients:{" "}
            {ingredients.map((i) => (
              <em key={i}>{i},</em>
            ))}
          </p>
        </label>
        <label>
          <span>Recipe time:</span>
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </label>
        <button className="btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
