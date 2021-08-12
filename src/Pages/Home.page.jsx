import React, { useState, useEffect } from "react";
import EntertainmentCard from "../components/Entertainment/Entertainmentcard";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import axios from "axios";

function Home() {
  const [popularMovies, setpopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [upcomingMovies, setUpCommingMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setpopularMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requesttopMovies = async () => {
      const getTopMovies = await axios.get("/movie/top_rated");
      setTopMovies(getTopMovies.data.results);
    };

    requesttopMovies();
  }, []);

  useEffect(() => {
    const requestUpCommingMovies = async () => {
      const getUpCommingMovies = await axios.get("/movie/upcoming");
      setUpCommingMovies(getUpCommingMovies.data.results);
    };

    requestUpCommingMovies();
  }, []);

  return (
    <>
      <div className="hidden md:block container mx-auto py-10 lg:px-36 " >
        <img
          src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
          alt=""
        />
      </div>
      <div className="container mx-auto py-10 lg:px-36 ">
        <h1 className="font-bold text-2xl pl-5  py-5 text-gray-700">
          The Best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>
      <div className="bg-bms-800 ">
        <div className="hidden px-10  sm:block ">
          <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="lg:px-36  ">
          <PosterSlider
            images={popularMovies}
            heading="Premieres"
            subtitle="Brand new realses every friday"
            isDark
          />
        </div>
      </div>
      <div className="lg:px-36 py-10 ">
        <PosterSlider images={topMovies} heading="Online Streaming events" />
      </div>
      <div className="lg:px-36 py-10 ">
        <PosterSlider images={upcomingMovies} heading="Outdoor events" />
      </div>
    </>
  );
}

export default Home;
