import React, { useState, useEffect } from "react";
import Looper from "./components/Looper";
import BeatLoader from "react-spinners/BeatLoader";

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
      {loading ? (
        <BeatLoader loading={loading} color={"#c2c2c2"} size={120} />
      ) : (
        <Looper />
      )}
    </div>
  );
};

export default App;
