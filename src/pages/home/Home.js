import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import { useTheme } from "../../hooks/useTheme";

function Home() {
  const { data, loading, error } = useFetch("http://localhost:3000/recipes");
  const { mode } = useTheme();
  return (
    <div className="home">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
