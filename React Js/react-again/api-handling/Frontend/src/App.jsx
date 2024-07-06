import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // react query
  // const [products, loading, error] = customReactQuery('/api/products')

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request cancelled", error.message);
          return;
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    })();

    // cleanup code
    return () => {
      controller.abort();
    };
  }, [search]);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <h1>Number of Products: {products.length}</h1>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {loading && <p>Loading...</p>}
    </>
  );
}

export default App;

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(urlPath);
        setProducts(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return [products, loading, error];
};
