import React from "react";
import Masonry from "react-responsive-masonry";

//import data of objects
import objectsData from "../data/objectsData";
//import components
import ObjectPreview from "./ObjectPreview";

const ObjectsDisplay = () => {
  return (
    <div className="objects has-fade fade-in">
      <Masonry columnsCount={3} gutter="1rem">
        {objectsData.map((card) => {
          return <ObjectPreview {...card} key={card.id} page="objects" />;
        })}
      </Masonry>
    </div>
  );
};

export default ObjectsDisplay;
