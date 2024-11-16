import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
// import InfinityGauntlet from "./components/Gauntlet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
