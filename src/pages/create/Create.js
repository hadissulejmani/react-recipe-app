import "./Create.css";
import { useState, useRef, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Navigate, useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data, isPending, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

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
