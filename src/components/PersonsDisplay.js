import React from "react";

//import data of objects
import peopleData from "../data/peopleData";
//import components
import ObjectPreview from "./ObjectPreview";

const PersonsDisplay = () => {
  return (
    <div className="persons has-fade fade-in">
      {peopleData.map((card) => {
        return <ObjectPreview {...card} key={card.id} page="people" />;
      })}
      <div className="persons__spacer"></div>
    </div>
  );
};

export default PersonsDisplay;
