import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`} >
      <div className="flex  flex-col items-start   px-2 my-2 gap-2 ">
        <div className="lg:h-80 sm:h-48 md:h-80 ">
          <img
            className="w-full h-full rounded-md"
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.alt}
          />
        </div>
        <div className={`${props.isDark ? "text-white" : "text-gray-700"} `}>
          <h3 className="text-lg  font-bold">{props.original_title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Poster;
