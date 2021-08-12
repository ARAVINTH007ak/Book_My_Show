import React, { useContext, useState } from "react";
import { MovieContext } from "../context/movie.contact";
import PaymentModal from "../components/PaymentModel/Payment.component";
import settings from "../config/setting.cards";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovies = () => {
    setIsOpen(true);
    setPrice(599);
  };

  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");
  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-3 lg:gap-8 ">
        <div className="flex items-center gap-3">
          <div className="w-28 lg:w-30 ">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <span className="text-xs text-center bg-bms-800 p-1 text-white rounded-full">
            Straming Now
          </span>
        </div>
        <div className="flex flex-col-reverse gap-5 lg:flex-col  lg:gap-8">
          <h1 className="hidden lg:block lg:text-4xl text-white font-bold">
            {movie.original_title}
          </h1>
          <div className="flex  flex-col gap-2">
            <h4 className="text-gray-300 capitalize">
              4k &bull; {movie.original_language + "   "}
              <span className="text-red-500">Audio(4),Subtitles(1)</span>
            </h4>
            <h4 className="text-white lg:text-xl">
              {(movie.runtime / 60).toFixed(2)} hrs &bull;{genres} &bull;{" "}
              {movie.release_date} &bull;
            </h4>
            <p className="lg:hidden text-white lg:text-xl">{movie.overview}</p>
          </div>
          <div className="text-white  w-full font-semibold  flex gap-3 items-center">
            <button onClick={rentMovies}  className="bg-red-500 py-3 w-full h-full rounded-lg">
              Rent  ₹149
            </button>
            <button onClick={buyMovies}   className="bg-red-500 py-3  w-full h-full rounded-lg">
              Buy  ₹689
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
