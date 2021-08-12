import React, { useState, useContext, useEffect } from "react";
import MovieHero from "../MovieHero/MovieHero.comonent";
import { SiGooglepay } from "react-icons/si";
import { IoLogoPaypal } from "react-icons/io5";
import Cast from "../components/Cast/Cast.comp";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import { MovieContext } from "../context/movie.contact";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const settingsCast = {
  infinity: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const settings = {
  infinity: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

function Movie() {
  const { movie } = useContext(MovieContext);
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  const [simalarMovies, setSimalarMovies] = useState([]);

  useEffect(() => {
    const requestSimalarMovies = async () => {
      const getSimalarMovies = await axios.get(`/movie/${id}/similar`);
      setSimalarMovies(getSimalarMovies.data.results);
    };
    requestSimalarMovies();
  }, [id]);


  const [recommendedMovies, setrecommendedMovies] = useState([]);

  useEffect(() => {
    const requestrecommendedMovies = async () => {
      const getrecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setrecommendedMovies(getrecommendedMovies.data.results);
    };
    requestrecommendedMovies();
  }, [id]);

  return (
    <>
      <div>
        <MovieHero />
      </div>
      <div className="hidden lg:block  my-12 container lg:ml-40   lg:w-4/5 ">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-2xl text-black font-bold">About the movie</h2>
          <p>{movie.overview}</p>
        </div>
        <hr className="my-8" />
      </div>
      <div className=" my-8 container px-2  lg:ml-40  lg:w-4/5">
        <h2 className="text-2xl text-black font-bold">Applicable offers</h2>
        <div className="md:flex gap-10">
          <div className="lg:w-2/5 flex items-start gap-5 my-10 bg-yellow-100 p-3  border-yellow-400 border-dashed border-2 rounded-lg">
            <div className="w-8 h-8">
              <SiGooglepay className="w-full h-full text-blue-600" />
            </div>

            <div className="flex flex-col gap-1">
              <h5 className="text-xl  font-bold">Google Pay Offer</h5>
              <h6 className="text-gray-600">
                Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                Stream.
              </h6>
            </div>
          </div>
          <div className="lg:w-2/5   flex items-start gap-5 my-10 bg-yellow-100 p-3  border-yellow-400 border-dashed border-2 rounded-lg">
            <div className="w-8 h-8">
              <IoLogoPaypal className="w-full h-full text-blue-600" />
            </div>

            <div className="flex flex-col gap-1">
              <h5 className="text-xl  font-bold">Pay Pal Offer</h5>
              <h6 className="text-gray-600">
                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                Pass @Rs.99
              </h6>
            </div>
          </div>
        </div>
        <hr className="my-8" />
      </div>

      <div className="my-8 container px-2  lg:ml-40  lg:w-4/5">
        <h2 className="text-2xl text-black font-bold mb-8">Cast & Crew</h2>

        <Slider {...settingsCast}>
          {cast.map((castdata) => (
            <Cast
              img={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
              name={castdata.original_name}
              chname={castdata.character}
            />
          ))}
        </Slider>
      </div>

      <div className="my-8 container px-2  lg:ml-40  lg:w-4/5">
        <PosterSlider
          config={settings}
          images={simalarMovies}
          heading="You might also like"
        />

        <hr className="my-8" />
      </div>

      <div className="my-8 container px-2  lg:ml-40  lg:w-4/5">
        <PosterSlider config={settings} images={recommendedMovies} heading="BMS XCLUSIV" />
      </div>
    </>
  );
}
export default Movie;
