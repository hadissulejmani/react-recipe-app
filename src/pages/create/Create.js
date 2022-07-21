import "./Create.css";
import { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
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
          <input
            type="text"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Recipe time:</span>
          <textarea
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
