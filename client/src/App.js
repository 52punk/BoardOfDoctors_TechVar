import React, { useState } from "react";
import FilterBar from "./components/FilterBar/index";
import NavBar from "./components/NavBar/index";
import LandingPage from "./pages/LandingPage/index";
const App = (props) => {
  const [getCity, setgetCity] = useState("Bengalore");
  const [getAvail, setgetAvail] = useState("yes");
  const city = (value) => {
    setgetCity(value);
    console.log(`From app.js ${getCity}`);
  };
  const availability = (value) => {
    setgetAvail(value);
    console.log(`From app.js ${getAvail}`);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div>
        <FilterBar availability={availability} city={city} />
      </div>

      <LandingPage getAvail={getAvail} getCity={getCity} />
    </>
  );
};

export default App;
