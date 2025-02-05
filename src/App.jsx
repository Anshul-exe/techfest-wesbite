import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import VenomSymbioteEffect from "./components/Venom";
import GlitchHomepage from "./components/Home";
import EyeOfAgamotto from "./components/EyeOfAgamotto";
import AboutSection from "./components/Aboutus";
// import InfinityGauntlet from "./components/Gauntlet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout />
      {/* <VenomSymbioteEffect/> */}
    </>
  );
}

export default App;
