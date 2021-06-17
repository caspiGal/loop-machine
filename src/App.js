import React, { useState, useEffect } from "react";
import Looper from "./components/Looper";
import BeatLoader from "react-spinners/BeatLoader";
import Header from "./components/Header";

const App = () => {
  // React Spinners loading for 2.5sec
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      <Header fluid />
      {loading ? (
        <BeatLoader loading={loading} color={"#c2c2c2"} size={100} />
      ) : (
        <Looper />
      )}
    </div>
  );
};

export default App;
