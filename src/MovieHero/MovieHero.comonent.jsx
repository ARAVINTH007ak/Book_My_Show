import React, { useContext } from "react";
import MovieInfo from "./MovieInfo.comp";
import { MovieContext } from "../context/movie.contact";





const MovieHero = () => {
  const {movie}=useContext(MovieContext)
  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden" style={{ height: "calc(180vw)" }}>
        <div className="h-full relative">
          <div className="absolute z-20 bottom-14 left-2 right-2 text-left text-xs">
            <MovieInfo />
          </div>
          <div className="w-full bg-opacity-90 h-64 absolute bottom-0 bg-black z-10" />
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>

      {/* MEDIUM */}

      <div
        className="hidden md:block lg:hidden "
        style={{ height: "calc(100vw)" }}
      >
        <div className="relative h-full">
          <div className="absolute z-20 bottom-20 left-5 right-5 text-left text-xs">
            <MovieInfo />
          </div>
          <div className="w-full bg-opacity-90 h-72 absolute bottom-0 bg-black z-10" />
          <img
           src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            className="w-full h-full"
          />
          
        </div>
      </div>

      {/* PC */}
      <div
        className="relative w-full  hidden lg:block "
        style={{ height: "30rem" }}
      >
        <div
          className="absolute w-full h-full z-30"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        />

        <div className="absolute z-30 left-40 top-12 flex items-center gap-20">
          <div className=" w-64 h-96 ">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div>
            <MovieInfo />
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default MovieHero;
