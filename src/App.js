import React, { useState, useEffect } from "react";
import Looper from "./components/Looper";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./components/Header";

const App = () => {
  // React Spinners loading for 2.5sec
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <ClipLoader loading={loading} color={"black"} size={"250px"} />
      ) : (
        <Looper />
      )}
    </div>
  );
};

export default App;
