import "./Home.css";
import RecipeList from "../../components/RecipeList";
import { firestoreProject } from "../../firebase/config";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    firestoreProject
      .collection("cooking-recipes")
      .get()
      .then((snapshot) => {
        const recipes = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setData(recipes);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
