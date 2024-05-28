import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const ObjectPreview = (props) => {
  const { image, title, text, id, page } = props;
  const { setDescription, setTitle, setPicture } = useGlobalContext();

  return (
    <article
      className="previewcard"
      onClick={() => {
        setDescription(text);
        setTitle(title);
        setPicture(image);
      }}
    >
      <Link to={`/${page}/${id}`} className="previewcard__link">
        <div className="previewcard__image">
          <img src={image} alt={title} />
        </div>
      </Link>
    </article>
  );
};

export default ObjectPreview;
