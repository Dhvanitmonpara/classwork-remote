import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/jokes");
        setJokes(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  });

  return (
    <>
      <h1>Chai aur code</h1>
      <p>Total jokes: {jokes.length}</p>
      {loading && <p>Loading...</p>}
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.text}</p>
        </div>
      ))}
    </>
  );
}

export default App;
