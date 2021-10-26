import React from "react";
import FilterBar from "./components/FilterBar/index";
import NavBar from "./components/NavBar/index";
import LandingPage from "./pages/LandingPage/index";
import Card from "./ui/card/index";
const App = () => {
  return (
    <>
      Hello World!!!
      <div>
        <LandingPage />
        <div>
          <NavBar />
        </div>

        <div>
          <FilterBar />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default App;
