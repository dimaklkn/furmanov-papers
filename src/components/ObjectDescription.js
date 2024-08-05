import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const ObjectDescription = () => {
  const { picture, title, description } = useGlobalContext();
  return (
    <div className="objectdesc">
      <div className="objectdesc__text">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/">
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </Link>
      </div>
      <img src={picture} alt={title} />
    </div>
  );
};

export default ObjectDescription;
