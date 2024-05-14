import "./App.css";
import config from "./config/config.js";
const {
  appwriteUrl,
  appwriteProjectId,
  appwriteDatabseId,
  appwriteCollectionId,
  appwriteBucketId,
} = config

function App() {
  return (
    <>
      <h1>Hello world {appwriteUrl}</h1>
    </>
  );
}

export default App;
