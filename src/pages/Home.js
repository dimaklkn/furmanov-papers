import React from "react";
//import loader
import MyLoader from "../components/Loader";
import useLoader from "../hooks/useLoader";

//import components
import ObjectsDisplay from "../components/ObjectsDisplay";
import PersonsDisplay from "../components/PersonsDisplay";

const Home = () => {
  const isLoading = useLoader(800);
  return (
    <div className="container home">
      {isLoading ? (
        <MyLoader />
      ) : (
        <>
          <PersonsDisplay />
          <ObjectsDisplay />
        </>
      )}
    </div>
  );
};

export default Home;
